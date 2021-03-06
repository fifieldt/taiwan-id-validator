import {
  isGuiNumberValid,
  isNationalIdentificationNumberValid,
  isCitizenDigitalCertificateValid,
  isEInvoiceCellPhoneBarcodeValid,
  isEInvoiceDonateCodeValid
} from '../src/index'

describe('isGuiNumValid', () => {
  it('should only accpet 8-digit strings', () => {
    expect(isGuiNumberValid(12345678)).toBe(false)
  })

  it('should return true if the input is correct', () => {
    expect(isGuiNumberValid('12345675')).toBe(true)
    expect(isGuiNumberValid('12345676')).toBe(true) // 6th char is 7
  })

  it('should return false if the input is incorrect', () => {
    expect(isGuiNumberValid('1234567')).toBe(false)
    expect(isGuiNumberValid('123456789')).toBe(false)
    expect(isGuiNumberValid('12345678')).toBe(false)
  })
})

describe('isNationalIdentificationNumberValid', () => {
  it('should only accpet strings with length 10', () => {
    expect(isNationalIdentificationNumberValid('A1234567899')).toBe(false)
    expect(isNationalIdentificationNumberValid('A12345678')).toBe(false)
  })

  it('should only accpet strings Begin with English Letter', () => {
    expect(isNationalIdentificationNumberValid('2123456789')).toBe(false)
    expect(isNationalIdentificationNumberValid('1123456789')).toBe(false)
  })

  it('should return false if the first number is not 1 or 2', () => {
    expect(isNationalIdentificationNumberValid('A323456789')).toBe(false)
    expect(isNationalIdentificationNumberValid('A423456789')).toBe(false)
  })

  it('should return true if the input is correct', () => {
    expect(isNationalIdentificationNumberValid('A123456789')).toBe(true)
    expect(isNationalIdentificationNumberValid('F131104093')).toBe(true)
    expect(isNationalIdentificationNumberValid('O158238845')).toBe(true)
    expect(isNationalIdentificationNumberValid('N116247806')).toBe(true)
    expect(isNationalIdentificationNumberValid('L122544270')).toBe(true)
    expect(isNationalIdentificationNumberValid('C180661564')).toBe(true)
    expect(isNationalIdentificationNumberValid('Y123456788')).toBe(true)
  })

  it('should return false if the input is incorrect', () => {
    expect(isNationalIdentificationNumberValid('A123456788')).toBe(false)
    expect(isNationalIdentificationNumberValid('F131104091')).toBe(false)
    expect(isNationalIdentificationNumberValid('O158238842')).toBe(false)
  })
})

describe('isCitizenDigitalCertificateValid', () => {
  it('should have length 16', () => {
    expect(isCitizenDigitalCertificateValid('AB123456789012345')).toBe(false)
    expect(isCitizenDigitalCertificateValid('AB1234567890123')).toBe(false)
  })

  it('should return true if the input is correct', () => {
    expect(isCitizenDigitalCertificateValid('AB12345678901234')).toBe(true)
    expect(isCitizenDigitalCertificateValid('RP47809425348791')).toBe(true)
  })

  it('should return false if the input is incorrect', () => {
    expect(isCitizenDigitalCertificateValid('A112345678901234')).toBe(false)
    expect(isCitizenDigitalCertificateValid('9B12345678901234')).toBe(false)
    expect(isCitizenDigitalCertificateValid('AA123456789012J4')).toBe(false)
  })
})

describe('isEInvoiceCellPhoneBarcodeValid', () => {
  it('should have length 8', () => {
    expect(isEInvoiceCellPhoneBarcodeValid('/ABCD1234')).toBe(false)
    expect(isEInvoiceCellPhoneBarcodeValid('/ABCD12')).toBe(false)
  })

  it('should return false if the input contains invalid char', () => {
    expect(isEInvoiceCellPhoneBarcodeValid('/ABCD12;')).toBe(false)
    expect(isEInvoiceCellPhoneBarcodeValid('/ABCD$12')).toBe(false)
    expect(isEInvoiceCellPhoneBarcodeValid('/ab12345')).toBe(false)
  })

  it('should return true if the input is correct', () => {
    expect(isEInvoiceCellPhoneBarcodeValid('/+.-++..')).toBe(true)
    expect(isEInvoiceCellPhoneBarcodeValid('/AAA33AA')).toBe(true)
    expect(isEInvoiceCellPhoneBarcodeValid('/P4SV.-I')).toBe(true)
    expect(isEInvoiceCellPhoneBarcodeValid('/O0O01I1')).toBe(true)
  })
})

describe('isEInvoiceDonateCodeValid', () => {
  it('should have length 3~7', () => {
    expect(isEInvoiceDonateCodeValid('00')).toBe(false)
    expect(isEInvoiceDonateCodeValid('12345678')).toBe(false)
    expect(isEInvoiceDonateCodeValid('ab3456')).toBe(false)
  })

  it('should return false if the input is incorrect', () => {
    expect(isEInvoiceDonateCodeValid('001')).toBe(true)
    expect(isEInvoiceDonateCodeValid('10001')).toBe(true)
    expect(isEInvoiceDonateCodeValid('2134567')).toBe(true)
  })
})
