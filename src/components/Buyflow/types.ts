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

export type BuyFlowStep = {
  stepId: StepId
}
