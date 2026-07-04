import { create } from "zustand";

export const useAppointmentStore = create((set) => ({
    appointments: [],
    addAppointment: (appointment) =>
        set((state) => ({
            appointment:[...state.appointments.appointment],
        }))
}))