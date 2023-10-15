import Link from "next/link";



export default function Home() {
  return(
    <>
      <h1>Battery Service 260</h1>
        <main>
          <h1>
            This is your one stop shop. Contact me for all mobile services. 
          </h1>

            <div>
              <Link href="/">
                Battery Replacement
              </Link>

              <LinK href="/">
                Oil Change
              </LinK>

              <Link href="/">
                Transmission
              </Link>
            
              <Link href="/">
                Engine Services
              </Link>

              <Link href="/">
                Radiator
              </Link>

              <Link href="/">
                Inspection
              </Link>

              

            </div>
        </main>
    </>
  )
}