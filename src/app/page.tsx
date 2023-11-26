import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { buttonVariants } from "@/components/ui/button"
import { ArrowDownToLine, CheckCircle, Ghost, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
const perks = [
  {
    name: 'Instant Delivery',
    icon: ArrowDownToLine,
    description: 'Get your assets delivered to your email in seconds and download them right away.'
  },
  {
    name: 'Guaranteed Quality',
    icon: CheckCircle,
    description: 'Quality is Guaranteed by our team. Not happy? You will be refunded, no questions asked.'
  },
  {
    name: 'For the Planet',
    icon: Leaf,
    description: 'Good for the planet somehow.'
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper >
        <div className="py-20 mx-auto text-center flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> Buy and sell property without the middle man.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground"> Welcome to Marketplace, the revolutionary new app that makes buying and selling property easier.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 ">
            <Link className={buttonVariants()} href='/homes'>Browse Trending
            </Link>
            <Button variant='ghost'>Our Promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.icon className="w-1/3 h-1/3" />}
                  </div>
                  <div />
                </div>
                <div className="mt-6 md:ml-4 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-500">{perk.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
