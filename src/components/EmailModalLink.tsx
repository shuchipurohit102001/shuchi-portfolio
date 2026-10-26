"use client";
import EmailModal from "@/components/EmailModal";
import { useState, type ReactNode } from "react";
import styled from "styled-components";

const Trigger = styled.button`
  display: inline-flex;
  align-items: center;
  gap: inherit;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
`;

export default function EmailModalLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Trigger
        type="button"
        className={className}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        {children}
      </Trigger>
      <EmailModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
