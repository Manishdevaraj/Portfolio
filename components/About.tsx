
import { AboutItems } from "@/data"
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"


function About() {
  return (
    <>
    <section id="about">

    <BentoGrid className="w-full py-20">
        {AboutItems.map(({id,title,description,className,imgClassName,titleClassName,img,spareImg})=>(
            <BentoGridItem
            title={title}
            key={id}
            id={id}
            description={description}
            className={className}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            img={img}
            spareImg={spareImg}
            />
        ))}
    </BentoGrid>
    </section>
    </>
  )
}

export default About