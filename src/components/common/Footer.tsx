interface FooterProps {
  tagline: string
  copyright: string
}

export default function Footer({ tagline, copyright }: FooterProps) {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xl font-semibold mb-2">DON AGENCY</div>
            <div className="text-sm text-muted-foreground">{tagline}</div>
          </div>
          <div className="text-sm text-muted-foreground">{copyright}</div>
        </div>
      </div>
    </footer>
  )
}
