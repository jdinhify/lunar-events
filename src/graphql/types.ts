/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEventInput = {
  id?: string | null
  description: string
  lunarDay: string
  lunarMonth: string
  owner?: string | null
  collaborators?: Array<string | null> | null
}

export type ModelEventConditionInput = {
  description?: ModelStringInput | null
  lunarDay?: ModelStringInput | null
  lunarMonth?: ModelStringInput | null
  and?: Array<ModelEventConditionInput | null> | null
  or?: Array<ModelEventConditionInput | null> | null
  not?: ModelEventConditionInput | null
}

export type ModelStringInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
}

export type UpdateEventInput = {
  id: string
  description?: string | null
  lunarDay?: string | null
  lunarMonth?: string | null
  owner?: string | null
  collaborators?: Array<string | null> | null
}

export type DeleteEventInput = {
  id?: string | null
}

export type ModelEventFilterInput = {
  id?: ModelIDInput | null
  description?: ModelStringInput | null
  lunarDay?: ModelStringInput | null
  lunarMonth?: ModelStringInput | null
  owner?: ModelStringInput | null
  collaborators?: ModelStringInput | null
  and?: Array<ModelEventFilterInput | null> | null
  or?: Array<ModelEventFilterInput | null> | null
  not?: ModelEventFilterInput | null
}

export type ModelIDInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export type CreateEventMutationVariables = {
  input: CreateEventInput
  condition?: ModelEventConditionInput | null
}

export type CreateEventMutation = {
  createEvent: {
    __typename: 'Event'
    id: string
    description: string
    lunarDay: string
    lunarMonth: string
    owner: string | null
    collaborators: Array<string | null> | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateEventMutationVariables = {
  input: UpdateEventInput
  condition?: ModelEventConditionInput | null
}

export type UpdateEventMutation = {
  updateEvent: {
    __typename: 'Event'
    id: string
    description: string
    lunarDay: string
    lunarMonth: string
    owner: string | null
    collaborators: Array<string | null> | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteEventMutationVariables = {
  input: DeleteEventInput
  condition?: ModelEventConditionInput | null
}

export type DeleteEventMutation = {
  deleteEvent: {
    __typename: 'Event'
    id: string
    description: string
    lunarDay: string
    lunarMonth: string
    owner: string | null
    collaborators: Array<string | null> | null
    createdAt: string
    updatedAt: string
  } | null
}

export type GetEventQueryVariables = {
  id: string
}

export type GetEventQuery = {
  getEvent: {
    __typename: 'Event'
    id: string
    description: string
    lunarDay: string
    lunarMonth: string
    owner: string | null
    collaborators: Array<string | null> | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListEventsQuery = {
  listEvents: {
    __typename: 'ModelEventConnection'
    items: Array<{
      __typename: 'Event'
      id: string
      description: string
      lunarDay: string
      lunarMonth: string
      owner: string | null
      collaborators: Array<string | null> | null
      createdAt: string
      updatedAt: string
    } | null> | null
    nextToken: string | null
  } | null
}

export type OnCreateEventSubscriptionVariables = {
  owner: string
  collaborators: string
}

export type OnCreateEventSubscription = {
  onCreateEvent: {
    __typename: 'Event'
    id: string
    description: string
    lunarDay: string
    lunarMonth: string
    owner: string | null
    collaborators: Array<string | null> | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateEventSubscriptionVariables = {
  owner: string
  collaborators: string
}

export type OnUpdateEventSubscription = {
  onUpdateEvent: {
    __typename: 'Event'
    id: string
    description: string
    lunarDay: string
    lunarMonth: string
    owner: string | null
    collaborators: Array<string | null> | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteEventSubscriptionVariables = {
  owner: string
  collaborators: string
}

export type OnDeleteEventSubscription = {
  onDeleteEvent: {
    __typename: 'Event'
    id: string
    description: string
    lunarDay: string
    lunarMonth: string
    owner: string | null
    collaborators: Array<string | null> | null
    createdAt: string
    updatedAt: string
  } | null
}
