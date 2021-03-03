<template>
  <div class="account">
    <p class="account__greetings">Olá, {{ state.user?.name }}</p>
    <div class="account__money-transfer">
      <p class="account__money">R$ {{ state.user?.money }}</p>
      <div class="account__transfer center" @click="transfer">
        <arrow-up-right />
      </div>
    </div>
    <div class="account__transactions">
      <div
        v-for="(transaction, index) in transactions"
        :key="transaction.id"

        :class="[ 'transaction', index & 1 ? 'transaction--odd' : '' ]"

        @click="seeTransaction(transaction.id)"
      >
        <p class="transaction__date">{{ formatDate(transaction.date) }}</p>
        <p class="transaction__person">{{ transaction.person }}</p>
        <p :class="[ 'transaction__value', `transaction__value--${transaction.type}` ]">
          <plus v-if="transaction.type === 'received'" />
          <minus v-else />
           R$ {{ transaction.value }}
        </p>
      </div>
    </div>
    <!--
    <div class="account__transactions">
      <div
        v-for="transaction in transactions"
        :key="transaction.id"
        class="transaction"
      >
        <p class="transaction__person">{{ transaction.person }}</p>
        <p :class="[ 'transaction__value', `transaction__value--${transaction.type}` ]">
          <plus v-if="transaction.type === 'received'" />
          <minus v-else />
          R$ {{ transaction.value }}
        </p>
      </div>
    </div>
    -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { state } from '../store';
import { useRouter } from 'vue-router';

import ArrowUpRight from '../assets/arrow-up-right.svg';
import Plus from '../assets/plus.svg';
import Minus from '../assets/minus.svg';

export default defineComponent({
  name: 'Account',
  components: { ArrowUpRight, Plus, Minus },

  setup() {
    const router = useRouter();

    const transactions: ({ id: string, date: Date, person: string, value: number, type: 'sent' | 'received' })[] = [];

    for (let i = 0; i < 45; i++) {
      transactions.push({
        id: i,
        date: new Date(),
        person: 'Crunchyroll',
        value: 25,
        type: i & 1 ? 'sent' : 'received'
      });
    }

    function formatDate(date: Date) {
      const dateString = date.toLocaleString('en-GB');
      const parts = dateString.split(', ');

      return `${parts[0]} ${parts[1]}`;
    }

    function transfer() {
      router.push('/transfer');
    }

    function seeTransaction(id: string) {
      router.push(`/transaction/${id}`);
    }

    return { state, transactions, formatDate, transfer, seeTransaction };
  }
});
</script>

<style lang="scss" scoped>
.account {
  height: 100%;
  margin-left: 10px;

  display: flex;
  flex-direction: column;

  .account__greetings {
    font-size: 40px;
    margin-bottom: 10px;
  }

  .account__money-transfer {
    display: flex;
    align-items: center;

    width: 200px;

    margin-bottom: 10px;

    .account__money {
      font-size: 40px;
      margin-right: 10px;
    }

    .account__transfer {
      width: 40px;
      height: 40px;
      border-radius: 50%;

      background: var(--secondary);

      cursor: pointer;

      svg {
        width: 80%;
        height: 80%;
        color: var(--light);
      }
    }
  }

  .account__transactions {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    margin: 0 10px;
    
    .transaction {
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 5px 0;

      cursor: pointer;

      font-size: 30px;

      &--odd {
        background: var(--secondary);
        color: var(--light);
      }

      &__value {
        &--sent {
          color: var(--transaction-sent);
        }

        &--received {
          color: var(--transaction-received);
        }
      }
    }
  }

  /*.account__transactions {
    flex-grow: 1;

    max-width: 50%;
    min-width: 400px;
    max-height: 1000px;

    border-radius: 10px;
    padding: 10px;

    display: flex;
    flex-direction: column;

    overflow-y: auto;

    background: var(--secondary);
    color: var(--light);

    .transaction {
      margin: 5px 0;
      height: 20px;

      display: flex;
      justify-content: space-around;

      font-size: 20px;

      &__person {
        text-align: center;
      }

      &__value {
        text-align: center;

        &--received {
          color: #5bff8f;
        }

        &--sent {
          color: #ff6d6d;
        }

        svg {
          width: 15px;
          height: 15px;
        }
      }
    }
  }*/
}
</style>
