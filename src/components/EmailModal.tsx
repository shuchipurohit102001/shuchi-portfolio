"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { PaperPlaneRightIcon, TrashIcon, XIcon } from "@phosphor-icons/react";
import { Button, Input, Modal, Select, message } from "antd";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { z } from "zod";

const RECIPIENT = "shuchipurohit102001@gmail.com";

const QUERY_VALUES = [
  "1:1 coaching",
  "College or corporate workshop",
  "IELTS & TOEFL preparation",
  "Classroom-to-Corporate series",
  "Collaboration",
  "Other",
] as const;

const QUERY_OPTIONS = QUERY_VALUES.map((value) => ({ value, label: value }));

const formSchema = z.object({
  email: z.email("Enter a valid email address").max(254),
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name must be 80 characters or fewer"),
  query: z.enum(QUERY_VALUES, { error: "Please select a query" }),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2000),
});

type FormValues = z.infer<typeof formSchema>;

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
  .field {
    flex: 1;
    min-width: 0;
  }
  .field-error {
    display: block;
    padding: 0.15rem 0 0.35rem;
    color: #d93025;
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
  const [toast, toastHolder] = message.useMessage();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", name: "", message: "" },
  });

  const handleFinish = async (values: FormValues) => {
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email sending is not configured. Please try again later.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: RECIPIENT,
          from_name: values.name,
          name: values.name,
          from_email: values.email,
          email: values.email,
          reply_to: values.email,
          query: values.query,
          subject: values.query,
          message: values.message,
        },
        { publicKey },
      );
      toast.success("Message sent. Shuchi will get back to you soon.");
      reset();
      onClose();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not send your message.");
    }
  };

  const discard = () => {
    reset();
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
            <XIcon size={20} aria-hidden />
          </button>
        </Bar>

        <form onSubmit={handleSubmit(handleFinish)}>
          <Compose>
            <Row>
              <span className="row-label">To</span>
              <Chip>{RECIPIENT}</Chip>
            </Row>

            <Row>
              <label htmlFor="email">From</label>
              <div className="field">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="email"
                      variant="borderless"
                      placeholder="you@example.com"
                      autoComplete="email"
                      type="email"
                      disabled={isSubmitting}
                      status={errors.email ? "error" : undefined}
                    />
                  )}
                />
                {errors.email && <span className="field-error">{errors.email.message}</span>}
              </div>
            </Row>

            <Row>
              <label htmlFor="name">Name</label>
              <div className="field">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="name"
                      variant="borderless"
                      placeholder="Your name"
                      autoComplete="name"
                      maxLength={80}
                      disabled={isSubmitting}
                      status={errors.name ? "error" : undefined}
                    />
                  )}
                />
                {errors.name && <span className="field-error">{errors.name.message}</span>}
              </div>
            </Row>

            <Row>
              <label htmlFor="query">Subject</label>
              <div className="field">
                <Controller
                  name="query"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      id="query"
                      variant="borderless"
                      placeholder="Select your query"
                      options={QUERY_OPTIONS}
                      style={{ width: "100%" }}
                      disabled={isSubmitting}
                      status={errors.query ? "error" : undefined}
                    />
                  )}
                />
                {errors.query && <span className="field-error">{errors.query.message}</span>}
              </div>
            </Row>

            <Row style={{ borderBottom: 0 }}>
              <div className="field">
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <Input.TextArea
                      {...field}
                      id="message"
                      variant="borderless"
                      placeholder="Describe what you need help with"
                      autoSize={{ minRows: 7, maxRows: 12 }}
                      maxLength={2000}
                      showCount
                      style={{ paddingLeft: 0 }}
                      disabled={isSubmitting}
                      status={errors.message ? "error" : undefined}
                    />
                  )}
                />
                {errors.message && <span className="field-error">{errors.message.message}</span>}
              </div>
            </Row>

            <Foot>
              <SendButton
                htmlType="submit"
                type="primary"
                loading={isSubmitting}
                icon={<PaperPlaneRightIcon size={20} aria-hidden />}
              >
                Send
              </SendButton>
              <button
                type="button"
                className="discard"
                onClick={discard}
                aria-label="Discard draft"
                disabled={isSubmitting}
              >
                <TrashIcon size={20} aria-hidden />
              </button>
            </Foot>
          </Compose>
        </form>
      </Modal>
    </>
  );
};

export default EmailModal;
