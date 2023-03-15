import { BuyFlowStep, StepId } from './types'
import { ProductId } from './types'

export const PRODUCT_IDS_TO_NAMES = {
  [ProductId.DeveloperInsurance]: 'Developer Insurance',
}

export const STEPS_BY_PRODUCT_ID: Record<ProductId, BuyFlowStep[]> = {
  [ProductId.DeveloperInsurance]: [
    { stepId: StepId.Email },
    { stepId: StepId.Age },
    { stepId: StepId.Summary },
  ],
}
