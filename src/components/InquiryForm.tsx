"use client";
import { person } from "@/data/content";
import { t } from "@/providers/tokens";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input, message, Select } from "antd";
import { Controller, useForm, type ControllerRenderProps } from "react-hook-form";
import styled from "styled-components";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9 ()-]{10,15}$/, "Enter a valid phone number, like +91 98765 43210."),
  email: z.email("Enter a valid email address.").or(z.literal("")),
  interest: z.string().min(1, "Choose a topic."),
  message: z.string().trim().min(10, "Tell us a little more (at least 10 characters)."),
});
type Values = z.infer<typeof schema>;

const Box = styled.div<{ $plain?: boolean }>`
  background: ${(p) => (p.$plain ? "transparent" : t.c.lowest)};
  border: ${(p) => (p.$plain ? "none" : `1px solid ${t.c.line}55`)};
  border-radius: ${t.r.xl};
  padding: ${(p) => (p.$plain ? 0 : t.s.lg)};
  box-shadow: ${(p) => (p.$plain ? "none" : t.shadow)};
  @media (min-width: 640px) {
    padding: ${(p) => (p.$plain ? 0 : t.s.xl)};
  }
  h3 {
    margin-bottom: ${t.s.xs};
    font-size: 1.45rem;
  }
  .form-lede {
    color: ${t.c.inkVar};
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: ${t.s.lg};
  }
`;

export default function InquiryForm({
  options,
  title = "Send an Inquiry",
  description,
  plain = false,
}: {
  options: { value: string; label: string }[];
  title?: string;
  description?: string;
  plain?: boolean;
}) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      interest: options[0]?.value ?? "",
      message: "",
    },
  });
  const [api, ctx] = message.useMessage();
  // Opens a prefilled WhatsApp chat. Swap for a POST to your own API route if you want to store inquiries.
  const onSubmit = async (v: Values) => {
    const label = options.find((o) => o.value === v.interest)?.label ?? v.interest;
    const text = `Hi Shuchi, I'm ${v.name} (${v.phone}${v.email ? ", " + v.email : ""}). Topic: ${label}. ${v.message}`;
    window.open(`https://wa.me/${person.wa}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    api.success("Opening WhatsApp with your message.");
    reset();
  };
  const field = <Name extends keyof Values>(
    name: Name,
    label: string,
    node: (f: ControllerRenderProps<Values, Name>) => React.ReactNode,
  ) => (
    <Form.Item
      label={label}
      validateStatus={errors[name] ? "error" : ""}
      help={errors[name]?.message}
      required={name !== "email"}
    >
      <Controller name={name} control={control} render={({ field }) => <>{node(field)}</>} />
    </Form.Item>
  );
  return (
    <Box id="contact" $plain={plain}>
      {ctx}
      <h3>{title}</h3>
      {description && <p className="form-lede">{description}</p>}
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)} requiredMark="optional">
        {field("name", "Full name", (f) => (
          <Input {...f} autoComplete="name" />
        ))}
        {field("phone", "WhatsApp number", (f) => (
          <Input {...f} type="tel" autoComplete="tel" placeholder="+91 98765 43210" />
        ))}
        {field("email", "Email", (f) => (
          <Input {...f} type="email" autoComplete="email" />
        ))}
        {field("interest", "Topic", (f) => (
          <Select {...f} options={options} />
        ))}
        {field("message", "What would you like help with?", (f) => (
          <Input.TextArea {...f} rows={4} />
        ))}
        <Button type="primary" htmlType="submit" loading={isSubmitting} size="large" block>
          Send on WhatsApp
        </Button>
      </Form>
    </Box>
  );
}
