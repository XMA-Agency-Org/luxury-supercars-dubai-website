"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { contactData } from "@/app/(home)/_lib/contact-data"

const agents = [
  {
    name: contactData.whatsapp.aleona.name,
    language: contactData.whatsapp.aleona.language,
    href: contactData.whatsapp.aleona.href,
  },
  {
    name: contactData.whatsapp.ryan.name,
    language: contactData.whatsapp.ryan.language,
    href: contactData.whatsapp.ryan.href,
  },
]

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5", className)}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function AgentCard({
  name,
  language,
  href,
}: {
  name: string
  language: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-3 rounded-xl bg-neutral-900 px-4 py-3 transition-colors hover:bg-neutral-800"
    >
      <div className="flex flex-col">
        <span className="text-sm font-medium text-neutral-50">{name}</span>
        <span className="text-xs text-neutral-500">{language}</span>
      </div>
      <WhatsAppIcon className="h-5 w-5 text-success-500" />
    </a>
  )
}

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div
        className={cn(
          "absolute bottom-16 right-0 origin-bottom-right transition-all duration-300",
          isOpen
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-75 opacity-0"
        )}
      >
        <div className="w-80 rounded-2xl bg-surface shadow-2xl shadow-black/30">
          <div className="flex items-center justify-between rounded-t-2xl bg-success-600 px-5 py-4">
            <h3 className="text-sm font-semibold text-white">
              Need Help? Chat with us
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-white transition-colors hover:bg-success-700"
              aria-label="Close chat panel"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="flex flex-col gap-4 p-5">
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-semibold text-neutral-50">
                Start a Conversation
              </h4>
              <p className="text-sm text-neutral-500">
                Hi! Click one of our member below to chat on WhatsApp
              </p>
              <p className="text-xs text-neutral-600">
                The team typically replies in a few minutes.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {agents.map((agent) => (
                <AgentCard
                  key={agent.name}
                  name={agent.name}
                  language={agent.language}
                  href={agent.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-success-500 text-white shadow-lg transition-transform hover:scale-105"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
      >
        {isOpen ? (
          <CloseIcon className="h-6 w-6" />
        ) : (
          <WhatsAppIcon className="h-6 w-6" />
        )}
      </button>
    </div>
  )
}
