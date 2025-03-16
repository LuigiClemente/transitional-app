export const StepThree = ({ stepRefs, router, stepperData }:any) => {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="flex flex-row" key={'5step'}>
          <div className="color3 flex-col items-center flex">
            <div
              className="step-border step3 mr-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase"
              role="button"
              tabIndex={0}
              ref={stepRefs[2]}
              onKeyDown={() => {
                router.push('/plan')
              }}
              onClick={() => {
                router.push('/plan')
              }}
            >
              <div className="color3 text-3xl font-black">{`${stepperData[2].step}`}</div>
            </div>
            <div className="h-full border-l-4 border-transparent">
              <div className="animate-color-change step-border step3 mr-4 h-full border-l-4 border-solid"></div>
            </div>
          </div>
          <div className="step-border step3 flex-auto rounded border">
            <div className="flex flex-col items-center md:flex-row">
              <div className="flex-auto">
                <div className="font color3 flex w-fit flex-row items-center p-3 text-3xl">
                  <span className="text-3xl">{`${stepperData[2].title}`}</span>
                </div>
                <div className="color3 px-3 pb-6 text-txt">{`${stepperData[2].description}`}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start">
          <div className="border-r-4 border-t-4 border-transparent">
            <div className="step-border step3 ml-16 h-16 w-16 rounded-bl-full border-b-4 border-l-4 border-solid"></div>
          </div>
          <div className="flex-auto border-t-4 border-transparent">
            <div className="animate-color-change step-border step3 h-16 border-b-4 border-solid"></div>
          </div>
          <div className="step-border step3 mr-16 mt-16 h-16 w-16 rounded-tr-full border-r-4 border-t-4 border-solid"></div>
        </div>
      </div>
      
      {/* Mobile View */}
      <div className="md:hidden step-mobile-item step3-section">
        <div className="step-mobile-indicator step3-mobile-indicator"></div>
        <div className="step-mobile-header color3">
          {`${stepperData[2].step}`} - {`${stepperData[2].title}`}
        </div>
        <div className="step-mobile-content step3-mobile-content">
          <div className="color3">{`${stepperData[2].description}`}</div>
        </div>
      </div>
    </div>
  )
}