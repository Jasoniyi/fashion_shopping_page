import React from "react";
import { Jarkarta } from "../../Fonts/Fonts";

type TextHeaderShape = {
  title: string;
  description?: string;
};

const TextHeader = ({ description, title }: TextHeaderShape) => {
  return (
    <div>
      <h3 className="text-3xl uppercase py-3">{title}</h3>
      <p className={`${Jarkarta.className} text-descText text-sm`}>
        {description}
      </p>
    </div>
  );
};

export default TextHeader;
