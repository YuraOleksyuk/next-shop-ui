import PageBanner from "@/components/page-banner";

export default function CategoryLayout({ children } : { children: any }) {
  return (
    <main>
      <PageBanner title="OUR SHOP"/>
      <section className="section trending">
        <div className="container">
          {children}
        </div>
      </section>
    </main>
  )
}
