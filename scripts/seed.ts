const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Info" },
        { name: "Ujian" },
        { name: "Materi Pelajaran" },
        { name: "Event" },
        { name: "Tips" },
        { name: "Fun-Fact" },
      ],
    });
    await database.subject.createMany({
      data: [
        { name: "Matematika" },
        { name: "IPA" },
        { name: "Bahasa Indonesia" },
        { name: "Bahasa Inggris" },
        { name: "Matematika Wajib" },
        { name: "Matematika Peminatan" },
        { name: "Fisika" },
        { name: "Kimia" },
        { name: "Biologi" },
        { name: "Ekonomi" },
        { name: "Geografi" },
        { name: "Sosiologi" },
        { name: "Sejarah Indonesia" },
        { name: "Sejarah Peminatan" },
        { name: "Penalaran Umum" },
        { name: "PK & Penalaran Matematika" },
        { name: "PBM, PPU, dan Literasi B.Indonesia" },
        { name: "Literasi Bahasa Inggris" },
      ],
    });
    await database.kelas.createMany({
      data: [
        { name: "Kelas I" },
        { name: "Kelas II" },
        { name: "Kelas III" },
        { name: "Kelas IV" },
        { name: "Kelas V" },
        { name: "Kelas VI" },
        { name: "Kelas VII" },
        { name: "Kelas VIII" },
        { name: "Kelas IX" },
        { name: "Kelas X" },
        { name: "Kelas XI" },
        { name: "Kelas XII" },
        { name: "UTBK" },
      ],
    });
    console.log("Success");
  } catch (error) {
    console.log("Error seeding database categories", error);
  } finally {
    await database.$disconnect();
  }
}
main();
