import Link from "next/link";

export default function Home () {
  return (
    <>
    <section class="nav">
      <h1>Battery Service 260</h1>
        <h3 className="span loader">
        <span class="m">O</span><span class="m">N</span><span class="m">E</span><span class="m">&nbsp;</span>
        <span class="m">S</span><span class="m">T</span><span class="m">O</span><span class="m">P</span><span class="m">&nbsp;</span>
        <span class="m">S</span><span class="m">H</span><span class="m">O</span><span class="m">P</span>
        </h3>

          <div class="">
            <Link class="nav-tab" href="battery_replacement">Battery-Replacement</Link>
            <Link class="nav-tab" href="oil_change"> Oil Change</Link>
            <Link class="nav-tab" href="general_inquiry">Inspection</Link>
          </div>
    </section>

    <div>
      <p>
        Please contact me for any services your car may need. I've been working in the auto industry for over 30 years. Best service guaranteed!
      </p>
    </div>
      <img src="" />
    </>
  )
};





