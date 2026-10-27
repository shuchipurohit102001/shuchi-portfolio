"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { DefaultBrand, GmailBrand } from "@/components/ui/ui";
import { t } from "@/providers/tokens";
import {
  ChatTextIcon,
  PaperPlaneRightIcon,
  TagIcon,
  TrashIcon,
  UserIcon,
  XIcon,
} from "@phosphor-icons/react";
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
  background: ${t.c.primary};
  color: ${t.c.onPrimary};
  font-family: var(--font-epilogue), var(--font-manrope), sans-serif;
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
      background: rgba(255, 255, 255, 0.16);
    }
  }
`;

const Compose = styled.div`
  font-family: var(--font-manrope), system-ui, sans-serif;
  font-size: 0.9rem;
  color: ${t.c.ink};
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.15rem 1.1rem;
  border-bottom: 1px solid ${t.c.line};
  > label,
  > span.row-label {
    flex: none;
    width: 5rem;
    padding-top: 0.45rem;
    color: ${t.c.inkVar};
  }
  > label {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }
  > label svg {
    flex: none;
    color: ${t.c.secondary};
  }
  .field {
    flex: 1;
    min-width: 0;
  }
  .field-error {
    display: block;
    padding: 0.15rem 0 0.35rem;
    color: ${t.c.error};
    font-size: 0.75rem;
  }
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.3rem;
  padding: 0.15rem 0.6rem;
  border: 1px solid ${t.c.line};
  border-radius: 16px;
  background: ${t.c.cont};
  color: ${t.c.ink};
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
    color: ${t.c.inkVar};
    cursor: pointer;
    &:hover {
      background: ${t.c.cont};
    }
  }
`;

const SendButton = styled(Button)`
  && {
    height: 2.25rem;
    padding: 0 1.4rem;
    border: 0;
    border-radius: 18px;
    background: ${t.c.primary};
    color: ${t.c.onPrimary};
    font-weight: 500;
    box-shadow: none;
  }
  &&:hover {
    background: ${t.c.primaryHover} !important;
    color: ${t.c.onPrimary} !important;
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
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_fzkncrr";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_m4xt0uh";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "qwptM_v-GiQ9ucJr6";
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
        styles={{
          root: { padding: 0, overflow: "hidden", borderRadius: t.r.lg },
          body: { padding: 0, background: t.c.lowest },
        }}
        aria-label="Compose email to Shuchi Purohit"
      >
        <Bar>
          <span>New Message</span>
          <button type="button" onClick={onClose} aria-label="Close">
            <DefaultBrand icon={XIcon} size={20} aria-hidden />
          </button>
        </Bar>

        <form onSubmit={handleSubmit(handleFinish)}>
          <Compose>
            <Row>
              <span className="row-label">To</span>
              <Chip>
                <GmailBrand size={20} aria-hidden />
                {RECIPIENT}
              </Chip>
            </Row>

            <Row>
              <label htmlFor="email">
                <GmailBrand size={20} aria-hidden />
                From
              </label>
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
              <label htmlFor="name">
                <DefaultBrand icon={UserIcon} size={20} aria-hidden />
                Name
              </label>
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
              <label htmlFor="query">
                <DefaultBrand icon={TagIcon} size={20} aria-hidden />
                Subject
              </label>
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
              <label htmlFor="message">
                <DefaultBrand icon={ChatTextIcon} size={20} aria-hidden />
                Message
              </label>
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
                icon={<DefaultBrand icon={PaperPlaneRightIcon} size={20} aria-hidden />}
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
                <DefaultBrand icon={TrashIcon} size={20} aria-hidden />
              </button>
            </Foot>
          </Compose>
        </form>
      </Modal>
    </>
  );
};

export default EmailModal;
