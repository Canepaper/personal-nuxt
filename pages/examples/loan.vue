<template>
    <div class="center">

        <div class="card">

            <div class="card-content">
                <div class="card-content-user-input">
                    <h1>Calculate your loan</h1>
                    <label for="amount">How much do you want to loan?</label>
                    <input v-model="formatAmount" type="text" name="amount"
                        @blur="amountInputActive = false" @focus="amountInputActive = true"
                        :class="{ 'invalid-value': !validTotalAmount }" @change="calculateTotalCost" />

                    <span class="warning-text input-detail" v-if="!validTotalAmount">Please select a value between 5000 and
                        90000</span>
                    <span class="input-detail" v-else>$5,000 - $90,000</span>

                    <label for="duration">Duration</label>
                    <input v-model="formatYears" type="text" name="amount" />

                    <input type="range" v-model="duration" name="" id="" min="1" max="10" @change="calculateTotalCost">
                </div>

                <div class="card-content-payment">
                    <h2>Total payment</h2>
                    <span class="payment-description">This calculation is an estimation and no rights can be extracted from
                        this example.</span>

                    <div class="payment-details">

                        <b class="detail-heading">Monthly Price</b>
                        <span class="detail-field">{{ formattedDollarValue(monthlyPrice) }}</span>

                        <b class="detail-heading">Fixed Interest</b>
                        <span class="detail-field">8.5%</span>

                        <b class="detail-heading">Total Cost</b>
                        <span class="detail-field">{{ formattedDollarValue(totalCost) }}</span>

                    </div>


                </div>
            </div>

            <div class="card-actions">
                <button>Request a free quote</button>
            </div>

        </div>



    </div>
</template>

<script>

definePageMeta({
    layout: "example",
});

export default {
    data() {
        return {
            amountInputActive: false,
            interest: 8.5,
            totalAmount: 5000,
            duration: 1,
            totalCost: 5000,
            monthlyPrice: 400
        }
    },

    methods: {

        calculateTotalCost() {
            let addedCost = 0
            let monthlyInterest = this.interest / 12
            let months = this.duration * 12

            let remainingAmount = this.totalAmount

            for (let i = 0; i < months; i++) {
                addedCost += remainingAmount * monthlyInterest / 100
                remainingAmount -= this.totalAmount / months
                console.log(remainingAmount, addedCost)
            }

            this.totalCost = this.totalAmount + addedCost
            this.monthlyPrice = this.totalAmount / months
        },

        calculateMonthlyCost(value) {
            return this.totalAmount / 12
        },

        formattedDollarValue(value) {
            // Format the integer as a dollar value
            return value.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            });
        },
    },

    computed: {

        // formatAmount(){
        //     return this.formattedDollarValue(this.totalAmount)
        // },

        validTotalAmount() {
            return (this.totalAmount >= 5000 && this.totalAmount <= 90000)
        },

        formatAmount: {
            get() {
                if (this.amountInputActive) {
                    return this.totalAmount;
                } else {
                    return this.formattedDollarValue(this.totalAmount)
                }

            },

            set(val) {
                this.totalAmount = parseInt(val);

                if(isNaN(val)) {
                    this.totalAmount = 0
                }
            }
        },


        formatYears() {
            return `${this.duration} years`
        },

        formattedValue(value) {
            return this.formattedValue(value)
        },

        formattedTotalCost() {
            return this.formattedDollarValue(this.totalCost)
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");


* {
    --text: #444;
    --gray: #eee;
    --background: #ccc5ff;
    --card: #e0ddff;
    --primary: #887ed4;
    --primary-dark: #42359e;
    --borders: #aaa;
    font-family: 'Nunito', sans-serif;
    box-sizing: border-box;
    color: #444;
}

h1,
h2 {
    color: var(--primary-dark);
}

body {
    background-color: #cfb0b0 !important;
}

.card-content-payment {
    display: flex;
    flex-direction: column;
    width: 350px;
}

.logo {
    img {
        width: 400px;
    }
}

.payment-details {
    width: 100%;
    background: #eee;
    padding: 24px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 2px 0 rgba(34, 34, 34, .08);
}

.payment-description {
    margin-bottom: 24px;
}

.detail-heading {
    color: var(--primary-dark);
    font-size: 1.1rem;
}

.detail-field {
    margin-bottom: 24px;
}

.card-content-user-input {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    // padding: 20px;
}

.material-symbols-outlined {
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
}

.center {
    height: 100vh;
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgb(239, 237, 255);
    background: linear-gradient(232deg, rgba(239, 237, 255, 1) 0%, rgba(136, 126, 212, 1) 100%);
}

.card {
    animation: appear 1s;
    max-width: 1000px;
    width: 100%;
    padding: 48px;
    border-radius: 15px;
    background: var(--card);
    box-shadow: 0 2px 2px 0 rgba(34, 34, 34, .08);
}

.warning-text {
    font-weight: bold;
    color: crimson;
}

.input-detail {
    margin-top: -8px;
    margin-left: 8px;
}

.card-content {
    width: 100%;
    display: flex;
    gap: 48px;
}

.card-actions {
    margin-top: 24px;
}

input[type=text] {
    height: 50px;
    border: 1px solid var(--borders);
    margin-bottom: 14px;
    // border-radius: 12px;
    // color: var(--primary-dark);
    font-size: 1rem;
    padding: 12px;
}

.invalid-value {
    border: 2px solid crimson !important;
}

button {
    height: 50px;
    // border-radius: 10px;
    border: 2px solid var(--primary-dark);
    background: none;
    color: var(--primary-dark);
    font-weight: 400;
    font-size: 1rem;
    cursor: pointer;
    padding: 0px 24px;
    transition: 0.5s;

    &:hover {
        background: var(--primary-dark);
        color: #fff;
    }
}

label {
    margin-top: 10px;
    font-weight: 600;
    margin-bottom: 5px;
}

@keyframes appear {

    from {
        opacity: 0;
        transform: translateY(30%);
    }

    to {
        opacity: 1;
        transform: translateY(0%);
    }

}

@media (max-width: 767px) {
    .card {
        margin: 0;
    }
}

@media screen and (max-width: 880px) {

    .center {
        height: auto;
        padding: 0;
    }

    .card-content {
        display: flex;
        flex-direction: column;
    }

    .card {
        border-radius: 0;
        padding: 24px;
        width: 100%;
    }

    .card-content-payment {
        width: 100%;
    }
}
</style>