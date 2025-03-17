import { useLocale } from "next-intl";
import { allSteps } from "contentlayer/generated";

export function useStepper() {
    const locale = useLocale();
    
    // Get all steps for the current locale and sort by order
    const steps = allSteps
        .filter(step => {
            // Check if the step's source path includes the current locale
            // For example, if locale is 'en', we want steps from 'en.mdx' files
            return step._raw.sourceFilePath.includes(`/${locale}.mdx`);
        })
        .sort((a, b) => a.order - b.order);
        
    // Transform the data to match your expected format
    const stepperData = steps.map(step => ({
        step: `Step ${step.order}`,
        title: step.title,
        description: step.description,
        imgSrc: '/static/images/time-machine.jpg',
    }));

    return stepperData;
}