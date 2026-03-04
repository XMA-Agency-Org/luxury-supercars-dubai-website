"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

type FaqItemProps = {
  id: string
  question: string
  answer: string
}

function FaqItem({ id, question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const triggerId = `faq-trigger-${id}`
  const panelId = `faq-panel-${id}`

  return (
    <div className="border-b border-neutral-800">
      <button
        id={triggerId}
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className="flex w-full items-center justify-between py-5 cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="text-neutral-50 font-medium text-left pr-4">
          {question}
        </span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-primary-500 shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-primary-500 shrink-0" />
        )}
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-neutral-400 text-sm pb-5 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export { FaqItem }
