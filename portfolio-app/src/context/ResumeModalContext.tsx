"use client";

import React, { createContext, useContext, useState } from "react";

interface ResumeModalContextType {
  isOpen: boolean;
  openResumeModal: () => void;
  closeResumeModal: () => void;
}

const ResumeModalContext = createContext<ResumeModalContextType>({
  isOpen: false,
  openResumeModal: () => {},
  closeResumeModal: () => {},
});

export const useResumeModal = () => useContext(ResumeModalContext);

export function ResumeModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openResumeModal = () => setIsOpen(true);
  const closeResumeModal = () => setIsOpen(false);

  return (
    <ResumeModalContext.Provider value={{ isOpen, openResumeModal, closeResumeModal }}>
      {children}
    </ResumeModalContext.Provider>
  );
}
