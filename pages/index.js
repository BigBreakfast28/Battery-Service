import Link from "next/link";



export default function Home() {
  return(
    <>
    <div class="nav-container" className="items-center">
      <h1 className="text-center">
        Battery Service 260 <br/>
        This is your one stop shop. Contact me for all mobile services.
      </h1>
        <main>
            <div class="">
              <div class="nav-tab ">
                  <Link href="battery_replacement">
                    Battery Replacement
                  </Link>
              </div>
              <div class="nav-tab">
                  <Link href="oil_change">
                    Oil Change
                  </Link>
              </div>
            </div>
          </main>
        </div>
    </>
  )
}