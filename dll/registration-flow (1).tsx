import React from 'react';

const RegistrationFlow = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-green-800 mb-3">Alur Pendaftaran Siswa Baru</h1>
          <p className="text-lg text-gray-600">Ikuti langkah-langkah berikut untuk pendaftaran di SD dan SMA Kota Solok</p>
        </div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500"></div>
          
          {/* Steps */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex-1 md:text-right md:pr-10 mb-4 md:mb-0">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-green-700 mb-2">Persiapan Dokumen</h3>
                  <p className="text-gray-600">Siapkan semua dokumen yang dibutuhkan untuk pendaftaran:</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Kartu Keluarga</li>
                    <li>Akta Kelahiran</li>
                    <li>Pas Foto (3x4)</li>
                    <li>Rapor / Ijazah (untuk SMA)</li>
                  </ul>
                </div>
              </div>
              
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-green-600 rounded-full border-4 border-white shadow">
                <span className="text-white font-bold">1</span>
              </div>
              
              <div className="flex-1 md:pl-10 hidden md:block"></div>
            </div>
            
            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex-1 md:text-right md:pr-10 hidden md:block"></div>
              
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-green-600 rounded-full border-4 border-white shadow">
                <span className="text-white font-bold">2</span>
              </div>
              
              <div className="flex-1 md:pl-10 mb-4 md:mb-0">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-green-700 mb-2">Registrasi Online</h3>
                  <p className="text-gray-600">Buat akun dan lakukan pendaftaran online melalui website PPDB:</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Kunjungi ppdb.kotasolok.go.id</li>
                    <li>Buat akun dengan email aktif</li>
                    <li>Isi formulir pendaftaran</li>
                    <li>Unggah semua dokumen yang diminta</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex-1 md:text-right md:pr-10 mb-4 md:mb-0">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-green-700 mb-2">Verifikasi Berkas</h3>
                  <p className="text-gray-600">Bawa dokumen asli untuk diverifikasi:</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Datang ke sekolah tujuan pertama</li>
                    <li>Tunjukkan bukti pendaftaran online</li>
                    <li>Bawa semua dokumen asli</li>
                    <li>Ikuti proses verifikasi oleh petugas</li>
                  </ul>
                  <div className="mt-3 p-2 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700">
                    <p className="text-sm">Pastikan datang sesuai jadwal untuk menghindari antrean panjang</p>
                  </div>
                </div>
              </div>
              
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-green-600 rounded-full border-4 border-white shadow">
                <span className="text-white font-bold">3</span>
              </div>
              
              <div className="flex-1 md:pl-10 hidden md:block"></div>
            </div>
            
            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex-1 md:text-right md:pr-10 hidden md:block"></div>
              
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-green-600 rounded-full border-4 border-white shadow">
                <span className="text-white font-bold">4</span>
              </div>
              
              <div className="flex-1 md:pl-10 mb-4 md:mb-0">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-green-700 mb-2">Seleksi</h3>
                  <p className="text-gray-600">Sistem akan memproses pendaftaran berdasarkan jalur:</p>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="bg-green-50 p-2 rounded text-center">
                      <span className="font-semibold block">Zonasi</span>
                      <span className="text-sm text-gray-600">50-70%</span>
                    </div>
                    <div className="bg-blue-50 p-2 rounded text-center">
                      <span className="font-semibold block">Prestasi</span>
                      <span className="text-sm text-gray-600">15-30%</span>
                    </div>
                    <div className="bg-purple-50 p-2 rounded text-center">
                      <span className="font-semibold block">Afirmasi</span>
                      <span className="text-sm text-gray-600">10-15%</span>
                    </div>
                    <div className="bg-yellow-50 p-2 rounded text-center">
                      <span className="font-semibold block">Perpindahan</span>
                      <span className="text-sm text-gray-600">5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex-1 md:text-right md:pr-10 mb-4 md:mb-0">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-green-700 mb-2">Pengumuman</h3>
                  <p className="text-gray-600">Cek hasil seleksi penerimaan:</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Login ke akun PPDB</li>
                    <li>Lihat pengumuman pada tanggal yang ditentukan</li>
                    <li>Unduh Surat Keterangan Diterima (jika lulus)</li>
                  </ul>
                </div>
              </div>
              
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-green-600 rounded-full border-4 border-white shadow">
                <span className="text-white font-bold">5</span>
              </div>
              
              <div className="flex-1 md:pl-10 hidden md:block"></div>
            </div>
            
            {/* Step 6 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex-1 md:text-right md:pr-10 hidden md:block"></div>
              
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-green-600 rounded-full border-4 border-white shadow">
                <span className="text-white font-bold">6</span>
              </div>
              
              <div className="flex-1 md:pl-10">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-green-700 mb-2">Daftar Ulang</h3>
                  <p className="text-gray-600">Lakukan daftar ulang ke sekolah tujuan:</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Datang ke sekolah sesuai jadwal daftar ulang</li>
                    <li>Bawa Surat Keterangan Diterima</li>
                    <li>Lengkapi berkas administrasi tambahan</li>
                    <li>Ikuti orientasi sekolah</li>
                  </ul>
                  <div className="mt-3 p-2 bg-green-50 border-l-4 border-green-400 text-green-700">
                    <p className="text-sm">Selamat! Anda resmi menjadi siswa baru</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-green-800 mb-4">Jadwal Penting</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-green-100">
                  <th className="px-4 py-2 text-left">Kegiatan</th>
                  <th className="px-4 py-2 text-left">SD</th>
                  <th className="px-4 py-2 text-left">SMA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">Pendaftaran Online</td>
                  <td className="px-4 py-3">1-15 Juni 2025</td>
                  <td className="px-4 py-3">15-30 Juni 2025</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Verifikasi Berkas</td>
                  <td className="px-4 py-3">1-17 Juni 2025</td>
                  <td className="px-4 py-3">15 Juni - 2 Juli 2025</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Pengumuman</td>
                  <td className="px-4 py-3">20 Juni 2025</td>
                  <td className="px-4 py-3">5 Juli 2025</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Daftar Ulang</td>
                  <td className="px-4 py-3">21-24 Juni 2025</td>
                  <td className="px-4 py-3">6-9 Juli 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a href="#" className="inline-flex items-center px-6 py-3 bg-green-600 border border-transparent rounded-md font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
            Daftar Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFlow;
