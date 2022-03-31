import {Impress, Step} from 'react-impressjs';
import Steps from "../HomeSections";
import React from "react";
import ImpressContainer from "./ImpressContainer";

const HomeSections = () => {
  return (
    <ImpressContainer>
      <Impress
        fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}
        hintOn={false}
        // hintMessage={<div className="absolute left-0 bottom-[100px]">Hint</div>}
      >
        {Steps.map((step, i) => (
          <Step
            key={i}
            id={step.id}
            className={step.className}
            data={step.data}
          >
            {step.content}
          </Step>
        ))}
      </Impress>
    </ImpressContainer>
  );
};

export default HomeSections;