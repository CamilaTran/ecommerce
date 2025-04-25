import { Product } from "@/types/product.types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import './styles.scss'

interface InfoProps {
  info: Product["info"]
}

const Info = ({ info }: InfoProps) => {
  return <>
    <Accordion type="multiple" className="w-full">
      {info.map(({ title, description }, index) => <AccordionItem value={title} key={index}>
        <AccordionTrigger>
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <ul>
            {description.map((i, idx) => <li key={idx}>{i}</li>)}
          </ul>
        </AccordionContent>
      </AccordionItem>)}
    </Accordion>
  </>;
};

export default Info;
