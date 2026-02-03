import { describe, expect, it, vi } from 'vitest'

// `vi.mock()` is hoisted, so keep all referenced values inside `vi.hoisted()`.
const mocks = vi.hoisted(() => ({
  validateLabelsMock: vi.fn<(labels: string) => string | undefined>(),
  validateLoginMock: vi.fn<(login: string) => string | undefined>(),
  validatePasswordMock: vi.fn<(password: string, type: 'ldap' | 'local') => string | undefined>(),
  AccountCellLabelsMock: { name: 'AccountCellLabelsMock' },
  AccountCellTypeMock: { name: 'AccountCellTypeMock' },
  AccountCellLoginMock: { name: 'AccountCellLoginMock' },
  AccountCellPasswordMock: { name: 'AccountCellPasswordMock' },
  AccountCellDeleteMock: { name: 'AccountCellDeleteMock' },
}))

vi.mock('@/features/account-cell-labels', () => ({
  AccountCellLabels: mocks.AccountCellLabelsMock,
  validateLabels: mocks.validateLabelsMock,
}))

vi.mock('@/features/account-cell-type', () => ({
  AccountCellType: mocks.AccountCellTypeMock,
}))

vi.mock('@/features/account-cell-login', () => ({
  AccountCellLogin: mocks.AccountCellLoginMock,
  validateLogin: mocks.validateLoginMock,
}))

vi.mock('@/features/account-cell-password', () => ({
  AccountCellPassword: mocks.AccountCellPasswordMock,
  validatePassword: mocks.validatePasswordMock,
}))

vi.mock('@/features/account-cell-delete', () => ({
  AccountCellDelete: mocks.AccountCellDeleteMock,
}))

import { ACCOUNT_COLUMN_COMPONENTS, ACCOUNT_FIELD_VALIDATORS } from './accountTableConfig'

describe('accountTableConfig', () => {
  it('exports validators for all account cell fields', () => {
    expect(Object.keys(ACCOUNT_FIELD_VALIDATORS).sort()).toEqual(
      ['labels', 'login', 'password', 'type'].sort()
    )
  })

  it('labels validator delegates to validateLabels(labels)', () => {
    mocks.validateLabelsMock.mockReturnValueOnce('bad-labels')
    const row = { labels: 'a;b', login: '', password: '', type: 'local', id: '1' } as const

    const res = ACCOUNT_FIELD_VALIDATORS.labels(row)

    expect(mocks.validateLabelsMock).toHaveBeenCalledTimes(1)
    expect(mocks.validateLabelsMock).toHaveBeenCalledWith('a;b')
    expect(res).toBe('bad-labels')
  })

  it('login validator delegates to validateLogin(login)', () => {
    mocks.validateLoginMock.mockReturnValueOnce('bad-login')
    const row = { labels: '', login: 'user', password: '', type: 'local', id: '1' } as const

    const res = ACCOUNT_FIELD_VALIDATORS.login(row)

    expect(mocks.validateLoginMock).toHaveBeenCalledTimes(1)
    expect(mocks.validateLoginMock).toHaveBeenCalledWith('user')
    expect(res).toBe('bad-login')
  })

  it('password validator delegates to validatePassword(password, type)', () => {
    mocks.validatePasswordMock.mockReturnValueOnce('bad-password')
    const row = { labels: '', login: '', password: 'secret', type: 'local', id: '1' } as const

    const res = ACCOUNT_FIELD_VALIDATORS.password(row)

    expect(mocks.validatePasswordMock).toHaveBeenCalledTimes(1)
    expect(mocks.validatePasswordMock).toHaveBeenCalledWith('secret', 'local')
    expect(res).toBe('bad-password')
  })

  it('type validator always returns undefined', () => {
    const row = { labels: '', login: '', password: '', type: 'ldap', id: '1' } as const
    expect(ACCOUNT_FIELD_VALIDATORS.type(row)).toBeUndefined()
  })

  it('exports column components for all table column keys', () => {
    expect(Object.keys(ACCOUNT_COLUMN_COMPONENTS).sort()).toEqual(
      ['labels', 'type', 'login', 'password', 'action'].sort()
    )

    expect(ACCOUNT_COLUMN_COMPONENTS.labels).toBe(mocks.AccountCellLabelsMock)
    expect(ACCOUNT_COLUMN_COMPONENTS.type).toBe(mocks.AccountCellTypeMock)
    expect(ACCOUNT_COLUMN_COMPONENTS.login).toBe(mocks.AccountCellLoginMock)
    expect(ACCOUNT_COLUMN_COMPONENTS.password).toBe(mocks.AccountCellPasswordMock)
    expect(ACCOUNT_COLUMN_COMPONENTS.action).toBe(mocks.AccountCellDeleteMock)
  })
})

