type CMSIconProps = {
  icon: string
  className?: string
}

export const CMSIcon = ({ className, icon }: CMSIconProps) => {
  return (
    <div
      className={`${className} [&>*]:h-full [&>*]:w-full`}
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
    />
  )
}
