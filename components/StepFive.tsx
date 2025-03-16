export const StepFive = ({ stepRefs, router, stepperData }:any) => {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="flex flex-row" key={'8step'}>
          <div className="flex-col items-center flex">
            <div
              className="step-border step5 mr-4 flex w-32 flex-col font-black items-center justify-center rounded py-5 uppercase"
              ref={stepRefs[4]}
            >
              <div className="color5 text-3xl">{`${stepperData[4].step}`}</div>
            </div>
          </div>

          <div className="step-border step5 flex-auto rounded border">
            <div className="flex flex-col items-center md:flex-row">
              <div className="flex-auto">
                <div className="font color5 flex w-fit flex-row items-center p-3 text-3xl">
                  {`${stepperData[4].title}`}
                </div>
                <div className="color5 px-3 pb-6 text-txt">{`${stepperData[4].description}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile View */}
      <div className="md:hidden step-mobile-item step5-section">
        <div className="step-mobile-indicator step5-mobile-indicator"></div>
        <div className="step-mobile-header color5">
          {`${stepperData[4].step}`} - {`${stepperData[4].title}`}
        </div>
        <div className="step-mobile-content step5-mobile-content">
          <div className="color5">{`${stepperData[4].description}`}</div>
        </div>
      </div>
    </div>
  )
}