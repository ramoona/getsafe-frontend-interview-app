export type AgeData = { age?: number }
export type EmailData = { email?: string }
export type FullNameData = { firstName?: string; lastName?: string }

export type BuyFlowData = AgeData & EmailData & FullNameData

export enum StepId {
  FullName = 'full_name',
  Email = 'email',
  Age = 'age',
  Summary = 'summary',
}

export type BuyFlowStep =
  | BuyFlowAgeStep
  | BuyFlowEmailStep
  | BuyFlowSummaryStep
  | BuyFlowFullNameStep

interface BaseBuyFlowStep {
  optional?: boolean
}

export interface BuyFlowAgeStep extends BaseBuyFlowStep {
  stepId: StepId.Age
  min?: number
  max?: number
}

export interface BuyFlowEmailStep extends BaseBuyFlowStep {
  stepId: StepId.Email
}

export interface BuyFlowFullNameStep extends BaseBuyFlowStep {
  stepId: StepId.FullName
}

export interface BuyFlowSummaryStep {
  stepId: StepId.Summary
}
