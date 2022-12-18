<template>
  <div class="registration-page">
    <div class="registration-page__stepper-wrapper">
      <q-stepper
        v-model="step"
        ref="stepper"
        color="primary"
        animated
        header-class="hidden"
        class="registration-stepper"
      >
        <q-step
          :name="1"
          :done="step > 1"
          class="registration-stepper__step registration-stepper__step--first"
        >
          <h1 class="registration-page__title guest-title custom-font">Регистрация</h1>

          <div class="registration-stepper__item">
            <q-select
              :options="USER_ROLES"
              map-options
              emit-value
              option-value="id"
              option-label="name"
              v-model="registrationData.role"
              class="registration-stepper__select select"
              popup-content-class="select__menu"
              options-selected-class="select__option"
              dropdown-icon="keyboard_arrow_down"
              square
              borderless
            />
          </div>
          <div
            class="registration-stepper__item registration-stepper__item--last"
          >
            <q-select
              :options="ORGANIZATIONS"
              map-options
              emit-value
              option-value="id"
              option-label="name"
              v-model="registrationData.organization"
              class="registration-stepper__select select"
              popup-content-class="select__menu"
              options-selected-class="select__option"
              dropdown-icon="keyboard_arrow_down"
              square
              borderless
              @update:model-value="registrationData.conditions='offer'"
            />
          </div>

        </q-step>

        <q-step
          :name="2"
          :done="step > 2"
          class="registration-stepper__step"
        >
          <div class="registration-stepper__fix-height"
               :class="{'registration-stepper__fix-height--hidden' : registrationData.organization === Organization.sole_entrepreneur}">
            <div v-if="registrationData.organization === Organization.llc"
                 class="registration-stepper__group registration-stepper__group--rules">
              <label class="label">Наименование организации</label>
              <q-input
                ref="organizationNameInputRef"
                v-model="registrationData.llc_name"
                dense
                square
                borderless
                bottom-slots
                lazy-rules
                class="input"
                :rules="[rules.required, rules.minLen(3), rules.maxLen(60)]"
              />
              <small v-if="formErrors.email" class="text-red">{{ formErrors.email }}</small>
            </div>
          </div>
          <div class="registration-stepper__block-wrapper">
            <div class="registration-stepper__block">
              <div v-if="registrationData.organization === Organization.sole_entrepreneur"
                   class="registration-stepper__group registration-stepper__group--rules">
                <label class="label">Наименование</label>
                <q-input
                  ref="organizationInputRef"
                  v-model="registrationData.sole_entrepreneur_name"
                  dense
                  square
                  borderless
                  bottom-slots
                  lazy-rules
                  class="input"
                  :rules="[rules.required, rules.minLen(3), rules.maxLen(60)]"
                />
                <small v-if="formErrors.email" class="text-red">{{ formErrors.email }}</small>
              </div>
              <div class="registration-stepper__group registration-stepper__group--rules">
                <label class="label">ФИО</label>
                <q-input
                  ref="nameInputRef"
                  v-model="registrationData.user_name"
                  dense
                  square
                  borderless
                  bottom-slots
                  lazy-rules
                  class="input"
                  :rules="[rules.required, rules.minLen(3), rules.maxLen(60)]"
                />
                <small v-if="formErrors.email" class="text-red">{{ formErrors.email }}</small>
              </div>
              <div class="registration-stepper__group registration-stepper__group--rules">
                <label class="label">Электронная почта</label>
                <q-input
                  ref="emailInputRef"
                  v-model="registrationData.email"
                  type="email"
                  dense
                  square
                  borderless
                  bottom-slots
                  lazy-rules
                  class="input"
                  :rules="[rules.required, rules.email]"
                  @keydown.space.prevent
                />
                <small v-if="formErrors.email" class="text-red">{{ formErrors.email }}</small>
              </div>
              <div v-if="registrationData.organization === Organization.llc"
                   class="registration-stepper__group registration-stepper__group--rules">
                <label class="label">ИНН</label>
                <q-input
                  ref="innInputRef"
                  v-model="registrationData.inn"
                  type="number"
                  dense
                  square
                  borderless
                  bottom-slots
                  lazy-rules
                  class="input"
                  :rules="[rules.required, rules.inn]"
                  @keydown.space.prevent
                />
                <small v-if="formErrors.email" class="text-red">{{ formErrors.email }}</small>
              </div>
            </div>
            <div class="registration-stepper__block">
              <div class="registration-stepper__group registration-stepper__group--rules">
                <label class="label">Телефон</label>
                <q-input
                  ref="phoneInputRef"
                  v-model="registrationData.phone"
                  dense
                  square
                  borderless
                  bottom-slots
                  lazy-rules
                  type="number"
                  :rules="[rules.required]"
                  class="input"
                />
                <small v-if="formErrors.email" class="text-red">{{ formErrors.email }}</small>
              </div>
              <div class="registration-stepper__group registration-stepper__group--rules">
                <label class="label">Пароль</label>
                <q-input
                  ref="passwordInputRef"
                  v-model="registrationData.password"
                  dense
                  square
                  borderless
                  bottom-slots
                  lazy-rules
                  type="password"
                  class="input"
                  :rules="[rules.required, rules.minLen(8)]"
                  @keydown.space.prevent
                />
                <small v-if="formErrors.email" class="text-red">{{ formErrors.email }}</small>
              </div>
              <div class="registration-stepper__group registration-stepper__group--rules">
                <label class="label">Повторить пароль</label>
                <q-input
                  ref="repeatedPasswordInputRef"
                  v-model="registrationData.repeated_password"
                  dense
                  square
                  borderless
                  bottom-slots
                  lazy-rules
                  type="password"
                  class="input"
                  :rules="[rules.required, rules.password, rules.minLen(8)]"
                  @keydown.space.prevent
                />
                <small v-if="formErrors.email" class="text-red">{{ formErrors.email }}</small>
              </div>
            </div>
          </div>

        </q-step>

        <q-step
          :name="3"
          :done="step > 3"
          :disable="registrationData.role === Role.advertiser"
          class="registration-stepper__step registration-stepper__step--short registration-stepper__step--big-padding"
        >
          <div class="registration-stepper__group">
            <q-radio
              v-model="registrationData.conditions"
              class="radio"
              val="offer"
              label="Готов работать по оферте">
            </q-radio>
            <q-radio
              class="radio"
              v-model="registrationData.conditions"
              val="contract"
              label="Нужен физический договор">
            </q-radio>
          </div>
        </q-step>

        <q-step
          :name="4"
          :done="step > 4"
          :disable="registrationData.role === Role.advertiser || registrationData.conditions === Conditions.offer"
          class="registration-stepper__step registration-stepper__step--short registration-stepper__step--big-padding"
        >
          <div class="registration-stepper__group">
            <label class="label">Электронная почта</label>
            <q-input
              ref="emailContractInputRef"
              v-model="registrationData.email_for_contract"
              type="email"
              dense
              square
              borderless
              class="input"
              :rules="[rules.required, rules.email]"
              @keydown.space.prevent
            />
            <small v-if="formErrors.email" class="text-red">{{ formErrors.email }}</small>
          </div>
        </q-step>

        <q-step
          :name="5"
          :done="step > 5"
          :disable="registrationData.conditions === Conditions.contract"
          class="registration-stepper__step registration-stepper__step--padding"
        >
          <p class="registration-stepper__text">
            <a href="#">Оферта</a> для рекламных агентств / для рекламодателей
          </p>
          <p class="registration-stepper__text">
            <a href="#">Договор</a> об оказании услуг информационного взаимодействия с ОРД
          </p>
          <p class="registration-stepper__text">
            <a href="#">Правила</a> оказания услуг для рекламодателей / рекламных агентств
          </p>
          <div class="registration-stepper__item registration-stepper__item--checkbox">
            <q-checkbox
              v-model="registrationData.isContractAgreed"
              class="checkbox"
              dense
              checked-icon="done"
            >
              <template #default>
                Проставление вами галочки подтверждает, что вы прочитали и полностью безоговорочно принимаете условия
                следующих документов: 1) оферту для прямых рекламодателей/рекламных агентств, 2) правила оказания услуг
                для рекламодателей/рекламных агентств 3) договор об оказании услуг информационного взаимодействия с ОРД
              </template>
            </q-checkbox>
          </div>
          <p class="registration-stepper__text">
            <a href="#">Политика конфиденциальности</a>
          </p>
          <div class="registration-stepper__item registration-stepper__item--checkbox">
            <q-checkbox
              v-model="registrationData.isPrivacyPolicyAgreed"
              class="checkbox"
              dense
              checked-icon="done"
            >
              <template #default>
                Проставление вами галочки свидетельствует о том, что вы прочитали и полностью безоговорочно принимаете
                условия политики конфиденциальности
              </template>
            </q-checkbox>
          </div>
        </q-step>

        <q-step
          :name="6"
          class="registration-stepper__step registration-stepper__step--big-padding"
        >
          <p class="registration-stepper__text">
            Вы являетесь рекламораспространителем или оператором рекламной системы?
          </p>

          <div class="registration-stepper__btn-wrapper">
            <q-btn class="registration-stepper__main-btn main-btn main-btn--transparent"
                   @click="registrationData.isAdvertisingSystem=false; register()">Нет
            </q-btn>
            <q-btn class="registration-stepper__main-btn main-btn main-btn--transparent"
                   @click="registrationData.isAdvertisingSystem=true; register()">Да
            </q-btn>
          </div>
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation
            class="registration-stepper__nav"
            :class="{'registration-stepper__nav--short': step === 1 || step === 3 || step === 4 }">
            <q-btn v-if="step > 1" class="registration-stepper__nav-btn registration-stepper__nav-btn--back" flat
                   @click="$refs.stepper.previous()" label="Назад"></q-btn>
            <q-btn v-if="step !== 6" class="registration-stepper__nav-btn" @click="toNext"
                   :label="step === 4 ? 'Запросить договор' : 'Далее'"></q-btn>
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
  </div>
</template>


<script lang="ts" setup>
import {ref, computed} from 'vue';

enum Organization {
  llc = 1,
  sole_entrepreneur = 2,
}

enum Role {
  advertiser = 1,
  advertising_agency = 2,
}

enum Conditions {
  offer = 'offer',
  contract = 'contract',
}

interface RegistrationDataInterface {
  role: number,
  organization: number,
  llc_name: string | null,
  sole_entrepreneur_name: string | null,
  user_name: string,
  phone: string,
  email: string,
  password: string,
  repeated_password: string,
  inn: string | null,
  isContractAgreed: boolean,
  isPrivacyPolicyAgreed: boolean,
  email_for_contract: string | null,
  isAdvertisingSystem: boolean,
  conditions: string,
}

const USER_ROLES = [
  {
    id: 1,
    name: 'Рекламодатель',
  },
  {
    id: 2,
    name: 'Рекламное агенство',
  },
];

const ORGANIZATIONS = [
  {
    id: 1,
    name: 'ООО',
  },
  {
    id: 2,
    name: 'ИП',
  },
];

const step = ref<number>(1);
const stepper = ref();
const organizationNameInputRef = ref();
const organizationInputRef = ref()
const nameInputRef = ref()
const innInputRef = ref()
const emailInputRef = ref()
const phoneInputRef = ref()
const passwordInputRef = ref();
const repeatedPasswordInputRef = ref();
const emailContractInputRef = ref();

const registrationData = ref<RegistrationDataInterface>({
  role: 1,
  organization: 1,
  llc_name: null,
  sole_entrepreneur_name: null,
  user_name: '',
  phone: '',
  email: '',
  password: '',
  repeated_password: '',
  inn: null,
  isContractAgreed: true,
  isPrivacyPolicyAgreed: true,
  conditions: 'offer',
  email_for_contract: null,
  isAdvertisingSystem: false,
});

const formErrors = ref({
  email: '',
  password: '',
})

const register = () => {
  console.log(registrationData.value)
};

const checkValidate = computed(() => (...inputs: any[]) => {
  return inputs.reduce((isValid = true, input) => {
    const isValidInput = input.validate();
    if (!isValidInput) isValid = isValidInput;
    return isValid;
  }, []);
});

const toNext = () => {
  switch (step.value) {
    case 2:
      if (+registrationData.value.organization === Organization.llc &&
        checkValidate.value(organizationNameInputRef.value, nameInputRef.value, innInputRef.value, emailInputRef.value, phoneInputRef.value, passwordInputRef.value, repeatedPasswordInputRef.value)) {
        stepper.value.next();
      } else if (+registrationData.value.organization === Organization.sole_entrepreneur &&
        checkValidate.value(organizationInputRef.value, nameInputRef.value, emailInputRef.value, phoneInputRef.value, passwordInputRef.value, repeatedPasswordInputRef.value)) {
        stepper.value.next();
      }
      break;
    case 4:
      if (checkValidate.value(emailContractInputRef.value)) {
        stepper.value.next();
      }
      break;
    case 5:
      if (registrationData.value.isContractAgreed && registrationData.value.isPrivacyPolicyAgreed) {
        stepper.value.next()
      }
      break;
    default:
      stepper.value.next()
  }
};

const rules = {
  required: (v: boolean | undefined) => !!v || 'Поле обязательно для заполнения',
  minLen: (minLen: number) => (v: string) => {
    return v.length >= minLen || `Минимум ${minLen} символов`;
  },
  maxLen: (maxLen: number) => (v: string) => {
    return v.length <= maxLen || `Максимум ${maxLen} символов`;
  },
  inn: (v: string) => {
    const innPattern = /^[\d+]{10,12}$/;
    return innPattern.test(v) || 'Неверный формат ИНН';
  },
  email: (v: string) => {
    const emailPattern = /.+@.+\..+$/;
    return emailPattern.test(v) || 'Неверный формат email';
  },
  password: (v: string) => {
    return v === registrationData.value.password || 'Пароли не совпадают';
  }
};
</script>
