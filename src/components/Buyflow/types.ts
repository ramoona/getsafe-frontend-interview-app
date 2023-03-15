export type AgeData = { age?: number }
export type EmailData = { email?: string }

export type BuyFlowData = AgeData & EmailData

export enum ProductId {
  DeveloperInsurance = 'dev_ins',
}

export enum StepId {
  Age = 'age',
  Email = 'email',
  Summary = 'summary',
}

export type BuyFlowStep = BuyFlowAgeStep | BuyFlowEmailStep | BuyFlowSummaryStep

interface BaseBuyFlowStep {
  optional?: boolean
}

export interface BuyFlowAgeStep extends BaseBuyFlowStep {
  stepId: StepId.Age
  min?: number
  max: number
}

export interface BuyFlowEmailStep extends BaseBuyFlowStep {
  stepId: StepId.Email
}

export interface BuyFlowSummaryStep {
  stepId: StepId.Summary
}
