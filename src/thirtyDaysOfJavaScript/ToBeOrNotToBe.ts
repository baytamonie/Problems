type ToBeOrNotToBe = {
    toBe: (val: any) => boolean
    notToBe: (val: any) => boolean
}

export function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal")
            else return true
        },
        notToBe: (val2) => {
            if (val === val2) throw new Error("Equal")
            else return true
        }
    }
}
