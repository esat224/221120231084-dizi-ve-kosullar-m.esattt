// Çalışanları tutmak için bir dizi oluşturuyoruz.
let employees = [];

// === Çalışan Ekleme İşlemi ===
// Eklenmek istenen çalışanın bilgileri
let newEmployee = { name: "Ali", age: 25, department: "IT", salary: 5000 };

// İsim ve yaş kontrolü yaparak ekleme işlemi
if (newEmployee.name && newEmployee.age >= 18 && newEmployee.salary >= 0) {
  // Aynı isimde çalışan olup olmadığını kontrol etmek için findIndex kullanıyoruz.
  let isEmployeeExist = employees.findIndex(employee => employee.name === newEmployee.name) !== -1;

  if (!isEmployeeExist) {
    employees.push(newEmployee); // Çalışanı ekliyoruz.
    console.log(`${newEmployee.name} başarıyla eklendi.`);
  } else {
    console.log("Bu isimde bir çalışan zaten mevcut.");
  }
} else {
  console.log("Geçersiz bilgi. Lütfen doğru bilgileri giriniz.");
}

// === Çalışan Güncelleme İşlemi ===
let updateEmployeeName = "Ali";
let newAge = 26;
let newDepartment = "HR";
let newSalary = 6000;

// Çalışanı bulup bilgilerini güncelleme
let updateIndex = employees.findIndex(employee => employee.name === updateEmployeeName);
if (updateIndex !== -1) {
  if (newAge >= 18) employees[updateIndex].age = newAge;
  if (newDepartment) employees[updateIndex].department = newDepartment;
  if (newSalary >= 0) employees[updateIndex].salary = newSalary;
  console.log(`${updateEmployeeName} isimli çalışan güncellendi.`);
} else {
  console.log(`${updateEmployeeName} isimli çalışan bulunamadı.`);
}

// === Çalışan Silme İşlemi ===
let deleteEmployeeName = "Ali";

// Silinmek istenen çalışanı bulma
let deleteIndex = employees.findIndex(employee => employee.name === deleteEmployeeName);
if (deleteIndex !== -1) {
  employees.splice(deleteIndex, 1); // Çalışanı diziden çıkarıyoruz.
  console.log(`${deleteEmployeeName} isimli çalışan silindi.`);
} else {
  console.log(`${deleteEmployeeName} isimli çalışan bulunamadı.`);
}

// === Çalışan Listeleme İşlemi (Tüm Çalışanları Listeleme) ===
if (employees.length === 0) {
  console.log("Sistemde çalışan bulunmamaktadır.");
} else {
  console.log("Tüm Çalışanlar:");
  employees.forEach(employee => {
    console.log(`İsim: ${employee.name}, Yaş: ${employee.age}, Departman: ${employee.department}, Maaş: ${employee.salary}`);
  });
}

// === Departmana Göre Çalışan Listeleme ===
let departmentToFilter = "IT";
let filteredByDepartment = employees.filter(employee => employee.department === departmentToFilter);

if (filteredByDepartment.length === 0) {
  console.log(`Bu departmanda çalışan bulunmamaktadır: ${departmentToFilter}`);
} else {
  console.log(`Departman (${departmentToFilter}) Çalışanlar:`);
  filteredByDepartment.forEach(employee => {
    console.log(`İsim: ${employee.name}, Yaş: ${employee.age}, Maaş: ${employee.salary}`);
  });
}

// === Maaşa Göre Sıralama (Artan) ===
let sortedBySalaryAsc = [...employees].sort((a, b) => a.salary - b.salary);
console.log("Maaşa Göre Artan Sırada Çalışanlar:");
sortedBySalaryAsc.forEach(employee => {
  console.log(`İsim: ${employee.name}, Maaş: ${employee.salary}`);
});

// === Maaşı 5000'in Altında Olan Çalışanları Listeleme ===
let salaryLimit = 5000;
let filteredBySalary = employees.filter(employee => employee.salary < salaryLimit);
if (filteredBySalary.length === 0) {
  console.log(`Maaşı ${salaryLimit} TL'nin altında olan çalışan bulunmamaktadır.`);
} else {
  console.log(`Maaşı ${salaryLimit} TL'nin altında olan çalışanlar:`);
  filteredBySalary.forEach(employee => {
    console.log(`İsim: ${employee.name}, Maaş: ${employee.salary}`);
  });
}

// === En Yüksek Maaşlı Çalışanı Bulma ===
let highestSalaryEmployee = employees.reduce((prev, current) => (prev.salary > current.salary ? prev : current), employees[0]);
if (highestSalaryEmployee) {
  console.log(`En yüksek maaşlı çalışan: ${highestSalaryEmployee.name}, Maaş: ${highestSalaryEmployee.salary}`);
}

// === Toplam Maaş Hesaplama (Tüm Çalışanlar) ===
let totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
console.log(`Tüm çalışanların toplam maaşı: ${totalSalary}`);

// === Departman Bazında Toplam Maaş Hesaplama ===
let departmentTotalSalary = "IT";
let departmentSalarySum = employees
  .filter(employee => employee.department === departmentTotalSalary)
  .reduce((sum, employee) => sum + employee.salary, 0);

if (departmentSalarySum > 0) {
  console.log(`${departmentTotalSalary} departmanının toplam maaşı: ${departmentSalarySum}`);
} else {
  console.log(`Bu departmanda çalışan bulunmamaktadır: ${departmentTotalSalary}`);
}
