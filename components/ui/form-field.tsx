type FormFieldProps = {
  label: string
  children: React.ReactNode
}

function FormField({ label, children }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-medium text-neutral-400 tracking-wide">
        {label}
      </label>
      {children}
    </div>
  )
}

export { FormField }
