import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { studentSchema } from "@/validations/schemas";

export async function GET() {
    try {
        const students = await prisma.student.findMany({
            include: { group: true },
            orderBy: { firstName: "asc" }
        });
        return NextResponse.json(students);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch students" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = studentSchema.parse(body);

        const student = await prisma.student.create({
            data: validatedData,
        });

        return NextResponse.json(student, { status: 201 });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
