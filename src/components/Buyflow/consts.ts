import { BuyFlowStep, StepId } from './types'
import { ProductId } from '../../types/product'

export const STEPS_BY_PRODUCT_ID: Record<ProductId, BuyFlowStep[]> = {
  [ProductId.DeveloperInsurance]: [
    { stepId: StepId.Email },
    { stepId: StepId.Age, max: 90 },
    { stepId: StepId.Summary },
  ],
  [ProductId.DesignerInsurance]: [
    { stepId: StepId.FullName },
    { stepId: StepId.Email },
    { stepId: StepId.Age },
    { stepId: StepId.Summary },
  ],
}
