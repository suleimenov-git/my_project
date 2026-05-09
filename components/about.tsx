import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              О нашей компании
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Мы специализируемся на профессиональной перевозке автомобилей и услугах эвакуации любой сложности. За годы работы мы накопили опыт, который позволяет нам гарантировать безопасность вашего транспортного средства на каждом этапе пути — от погрузки до выгрузки.
            </p>
          </div>
          
          {/* Image Grid */}
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/gallery-1.jpg"
                alt="Перевозка автомобилей"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/gallery-2.jpg"
                alt="Эвакуация автомобилей"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/gallery-3.jpg"
                alt="Транспортировка авто"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/gallery-4.jpg"
                alt="Услуги эвакуатора"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
