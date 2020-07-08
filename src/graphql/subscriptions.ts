/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($owner: String!, $collaborators: String!) {
    onCreateEvent(owner: $owner, collaborators: $collaborators) {
      id
      description
      lunarDay
      lunarMonth
      owner
      collaborators
      createdAt
      updatedAt
    }
  }
`
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($owner: String!, $collaborators: String!) {
    onUpdateEvent(owner: $owner, collaborators: $collaborators) {
      id
      description
      lunarDay
      lunarMonth
      owner
      collaborators
      createdAt
      updatedAt
    }
  }
`
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($owner: String!, $collaborators: String!) {
    onDeleteEvent(owner: $owner, collaborators: $collaborators) {
      id
      description
      lunarDay
      lunarMonth
      owner
      collaborators
      createdAt
      updatedAt
    }
  }
`
