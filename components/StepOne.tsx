
export const StepOne = ({ stepRefs, stepperData }:any) => {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="flex flex-row" key={'1step'}>
          <div className="flex-col items-center flex">
            <div
              className="step-border step1 mr-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase"
              role="button"
              tabIndex={0}
              ref={stepRefs[0]}
            >
              <div className="color color1 text-3xl font-black">{`${stepperData[0].step}`}</div>
            </div>
            <div className="h-full border-l-4 border-transparent">
              <div className="step-border step1-border step1 animate-color-change mr-4 h-full border-l-4 border-solid"></div>
            </div>
          </div>
          <div className="step-border step1 flex-auto rounded border">
            <div className="flex flex-col items-center md:flex-row">
              <div className="flex-auto">
                <div className="font color1 flex w-fit flex-row items-center p-3 text-3xl">
                  {`${stepperData[0].title}`}
                </div>
                <div className="color1 px-3 pb-6 text-txt">{`${stepperData[0].description}`}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start" key={'2step'}>
          <div className="border-r-4 border-t-4 border-transparent">
            <div className="step-border step1 ml-16 h-16 w-16 rounded-bl-full border-b-4 border-l-4 border-solid"></div>
          </div>
          <div className="step1 flex-auto border-t-4 border-transparent">
            <div className="step-border step1 animate-color-change h-16 border-b-4 border-solid"></div>
          </div>
          <div className="step-border step1 mr-16 mt-16 h-16 w-16 rounded-tr-full border-r-4 border-t-4 border-solid"></div>
        </div>
      </div>
      
      {/* Mobile View */}
      <div className="md:hidden step-mobile-item step1-section">
        <div className="step-mobile-indicator step1-mobile-indicator"></div>
        <div className="step-mobile-header color1">
          {`${stepperData[0].step}`} - {`${stepperData[0].title}`}
        </div>
        <div className="step-mobile-content step1-mobile-content">
          <div className="color1">{`${stepperData[0].description}`}</div>
        </div>
      </div>
    </div>
  )
}