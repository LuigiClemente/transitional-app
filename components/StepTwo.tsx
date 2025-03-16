export const StepTwo = ({ stepRefs, router, stepperData }:any) => {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="flex flex-row-reverse" key={'3step'}>
          <div className="flex-col items-center flex">
            <div
              className="step-border step2 ml-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase"
              role="button"
              ref={stepRefs[1]}
              tabIndex={0}
            >
              <div className="color2 text-3xl font-black">{`${stepperData[1].step}`}</div>
            </div>
            <div className="h-full border-r-4 border-transparent">
              <div className="animate-color-change step-border step2 ml-4 h-full border-l-4 border-solid"></div>
            </div>
          </div>
          <div className="step-border step2 flex-auto rounded border">
            <div className="flex flex-col items-center md:flex-row">
              <div className="flex-auto">
                <div className="font flex w-fit flex-row items-center p-3 text-3xl">
                  <span className="font color2 ml-2 text-3xl">{`${stepperData[1].title}`}</span>
                </div>
                <div className="color2 px-3 pb-6 text-txt">{`${stepperData[1].description}`}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row-reverse items-start" key={'4step'}>
          <div className="border-l-4 border-t-4 border-transparent">
            <div className="step-border step2 mr-16 h-16 w-16 rounded-br-full border-b-4 border-r-4 border-solid"></div>
          </div>
          <div className="flex-auto border-t-4 border-transparent">
            <div className="step-border step2 animate-color-change h-16 border-b-4 border-solid"></div>
          </div>
          <div className="step-border step2 ml-16 mt-16 h-16 w-16 rounded-tl-full border-l-4 border-t-4 border-solid "></div>
        </div>
      </div>
      
      {/* Mobile View */}
      <div className="md:hidden step-mobile-item step2-section">
        <div className="step-mobile-indicator step2-mobile-indicator"></div>
        <div className="step-mobile-header color2">
          {`${stepperData[1].step}`} - {`${stepperData[1].title}`}
        </div>
        <div className="step-mobile-content step2-mobile-content">
          <div className="color2">{`${stepperData[1].description}`}</div>
        </div>
      </div>
    </div>
  )
}