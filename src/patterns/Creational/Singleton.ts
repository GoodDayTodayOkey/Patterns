type Coefficients = 'kg' | 'berkovets' | 'pood' | 'lot' | 'spool';

class Singleton {
  private static instance: Singleton;

  /**
   * Конструктор Одиночки всегда должен быть скрытым, чтобы предотвратить
   * создание объекта через оператор new.
   */

  private constructor() { }

  private coefficients: Record<Coefficients, number> = {
    kg: 1,
    berkovets: 163.8,
    pood: 16.38,
    lot: 0.012797,
    spool: 0.00427,
  };
  private value: string;

  /*
    проверяем что создан только один экземпляр класса и возвращаем его.
  */

  private static makeInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  /*
    какая то бизнес логика
  */

  public static getValue({ measure }: { measure: Coefficients }): string {
    const instance = Singleton.makeInstance();
    return !Number.isNaN(Number.parseFloat(instance.value)) ? String(Number.parseFloat(instance.value) / instance.coefficients[measure]) : '';
  }

  public static setValue({ measure, value }: { measure: Coefficients, value: string }): void {
    const instance = Singleton.makeInstance();
    instance.value = !Number.isNaN(Number.parseFloat(value)) ? String(Number.parseFloat(value) * instance.coefficients[measure]) : '';
  }
}

export default Singleton;