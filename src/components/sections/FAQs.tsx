import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordionItems } from "@/constants";

const FAQs = () => {
  return (
    <section id="products" className="rounded-xl text-white bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100 px-[10%] py-[5%] max-container max-sm:mt-12 mx-[10%]">
      <div className="text-center gap-5">
        <h2 className="text-4xl font-bold">
          <span className="text-yellow-300"> FAQ's</span>
        </h2>
      </div>
      <div className="flex-1 justify-center items-center">
        <Accordion type="single" collapsible>
          {accordionItems.map((item) => (
            <AccordionItem key={item.value} value={item.value} className="p-4">
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
