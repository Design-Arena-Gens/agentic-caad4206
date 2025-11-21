export const metadata = {
  title: 'Feet with Black Polish',
  description: 'Interactive feet visualization with black toenail polish',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f5f5f5' }}>{children}</body>
    </html>
  )
}
