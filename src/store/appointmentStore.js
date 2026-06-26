import { create } from "zustand";

export const useAppointmentStore = create((set) => ({
    apppintment: [],
    addAppointment: (doctor, data, time) =>
        set((state) => ({
            appointments: [
                ...state.appointments,
                {
                    id: crypto.randomUUID(),
                    doctor,
                    data,
                    time,
                    createdAt:new Date().toISOString(),
                },
            ],
        })),
    deleteAppointment: (id) => 
        set((state) => ({
            appointments:state.appointments.filter((a)=> a.id !==id),
        }))
}))