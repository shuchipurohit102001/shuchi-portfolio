"use client";
import { PaperPlaneRightIcon, TrashIcon, XIcon } from "@phosphor-icons/react";
import { Button, Form, Input, Modal, Select, message } from "antd";
import { useState } from "react";
import styled from "styled-components";

const RECIPIENT = "shuchipurohit102001@gmail.com";

const QUERY_OPTIONS = [
  { value: "1:1 coaching", label: "1:1 coaching" },
  { value: "College or corporate workshop", label: "College or corporate workshop" },
  { value: "IELTS & TOEFL preparation", label: "IELTS & TOEFL preparation" },
  { value: "Classroom-to-Corporate series", label: "Classroom-to-Corporate series" },
  { value: "Collaboration", label: "Collaboration" },
  { value: "Other", label: "Other" },
];

type FormValues = {
  email: string;
  name: string;
  query: string;
  message: string;
};

/* Gmail compose-window look: dark title bar, hairline-separated rows, blue pill Send button. */
const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0.9rem 0.6rem 1.1rem;
  background: #404040;
  color: #fff;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  button {
    display: inline-flex;
    padding: 0.25rem;
    border: 0;
    border-radius: 4px;
    background: transparent;
    color: #fff;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.18);
    }
  }
`;

const Compose = styled.div`
  font-family: Roboto, Arial, sans-serif;
  font-size: 0.9rem;
  color: #202124;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.15rem 1.1rem;
  border-bottom: 1px solid #e8eaed;
  > label,
  > span.row-label {
    flex: none;
    width: 3.4rem;
    padding-top: 0.45rem;
    color: #5f6368;
  }
  .ant-form-item {
    flex: 1;
    min-width: 0;
    margin: 0;
  }
  .ant-form-item-explain-error {
    padding-bottom: 0.35rem;
    font-size: 0.75rem;
  }
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  margin-top: 0.3rem;
  padding: 0.15rem 0.6rem;
  border: 1px solid #dadce0;
  border-radius: 16px;
  background: #f1f3f4;
  font-size: 0.82rem;
  overflow-wrap: anywhere;
`;

const Foot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.1rem;
  button.discard {
    display: inline-flex;
    padding: 0.4rem;
    border: 0;
    border-radius: 50%;
    background: transparent;
    color: #5f6368;
    cursor: pointer;
    &:hover {
      background: #f1f3f4;
    }
  }
`;

const SendButton = styled(Button)`
  && {
    height: 2.25rem;
    padding: 0 1.4rem;
    border: 0;
    border-radius: 18px;
    background: #0b57d0;
    color: #fff;
    font-weight: 500;
    box-shadow: none;
  }
  &&:hover {
    background: #0a4db8 !important;
    color: #fff !important;
  }
`;

type Props = {
  open: boolean;
  onClose: () => void;
};

const EmailModal = ({ open, onClose }: Props) => {
  const [form] = Form.useForm<FormValues>();
  const [sending, setSending] = useState(false);
  const [toast, toastHolder] = message.useMessage();

  const handleFinish = async (values: FormValues) => {
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      toast.success("Message sent. Shuchi will get back to you soon.");
      form.resetFields();
      onClose();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not send your message.");
    } finally {
      setSending(false);
    }
  };

  const discard = () => {
    form.resetFields();
    onClose();
  };

  return (
    <>
      {toastHolder}
      <Modal
        open={open}
        onCancel={onClose}
        footer={null}
        closable={false}
        centered
        width="min(580px, calc(100vw - 24px))"
        styles={{ root: { padding: 0, overflow: "hidden", borderRadius: 12 } }}
        aria-label="Compose email to Shuchi Purohit"
      >
        <Bar>
          <span>New Message</span>
          <button type="button" onClick={onClose} aria-label="Close">
            <XIcon size={18} aria-hidden />
          </button>
        </Bar>

        <Form form={form} layout="vertical" onFinish={handleFinish} requiredMark={false} disabled={sending}>
          <Compose>
            <Row>
              <span className="row-label">To</span>
              <Chip>{RECIPIENT}</Chip>
            </Row>

            <Row>
              <label htmlFor="email">From</label>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Enter a valid email address" },
                ]}
              >
                <Input id="email" variant="borderless" placeholder="you@example.com" autoComplete="email" />
              </Form.Item>
            </Row>

            <Row>
              <label htmlFor="name">Name</label>
              <Form.Item name="name" rules={[{ required: true, message: "Please enter your name" }]}>
                <Input id="name" variant="borderless" placeholder="Your name" autoComplete="name" maxLength={80} />
              </Form.Item>
            </Row>

            <Row>
              <label htmlFor="query">Subject</label>
              <Form.Item name="query" rules={[{ required: true, message: "Please select a query" }]}>
                <Select
                  id="query"
                  variant="borderless"
                  placeholder="Select your query"
                  options={QUERY_OPTIONS}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Row>

            <Row style={{ borderBottom: 0 }}>
              <Form.Item
                name="message"
                rules={[
                  { required: true, message: "Please add a short description" },
                  { min: 10, message: "Please write at least 10 characters" },
                ]}
              >
                <Input.TextArea
                  variant="borderless"
                  placeholder="Describe what you need help with"
                  autoSize={{ minRows: 7, maxRows: 12 }}
                  maxLength={2000}
                  showCount
                  style={{ paddingLeft: 0 }}
                />
              </Form.Item>
            </Row>

            <Foot>
              <SendButton
                htmlType="submit"
                type="primary"
                loading={sending}
                icon={<PaperPlaneRightIcon size={16} aria-hidden />}
              >
                Send
              </SendButton>
              <button type="button" className="discard" onClick={discard} aria-label="Discard draft" disabled={sending}>
                <TrashIcon size={18} aria-hidden />
              </button>
            </Foot>
          </Compose>
        </Form>
      </Modal>
    </>
  );
};

export default EmailModal;
