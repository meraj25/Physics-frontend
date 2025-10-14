
function PhysicsPage() {

   
    return (
        <div className="relative bg-[url('/assets/images/bg1.jpg')] bg-cover bg-center bg-no-repeat h-screen w-screen">
      <div className="absolute inset-0 bg-white/90">

       <Navigation back="&larr; Back" Type="Advance Level Physics" />
   
      <main className="content-center grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 ">
        <div className="ml-65">
        <SimpleCards  topic="Advance Level Physics 2026" image="al.jpg" />
        </div>
        <div className="ml-15">
        <SimpleCards  topic="Advance Level Physics 2027" image="al.jpg" />
        </div>
        <div className="ml-15">
        <SimpleCards  topic="Advance Level Physics 2028" image="al.jpg" />
        </div>
        <div className="ml-15">
        <SimpleCards  topic="Study Pack - Lesson wise Revision" image="al.jpg" />
        </div>
      </main>
      <Footer />
    </div>
    </div>
    )
}

export default PhysicsPage;