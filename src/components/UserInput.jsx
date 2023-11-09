export default function UserInput({ onChange, input }) {

    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label>
                        Initial Investment
                    </label>
                    <input type='number' onChange={(event) => onChange('initialInvestment',event.target.value)} value={input.initialInvestment} required />
                </p>
                <p>
                    <label>
                        Annual Investment
                    </label>
                    <input type='number' onChange={(event) => onChange('annualInvestment',event.target.value)} value={input.annualInvestment} required />
                </p>
                <p>
                    <label>
                        Expected Return
                    </label>
                    <input type='number' onChange={(event) => onChange('expectedReturn',event.target.value)} value={input.expectedReturn} required />
                </p>
                <p>
                    <label>
                        Duration
                    </label>
                    <input type='number' onChange={(event) => onChange('duration',event.target.value)} value={input.duration} required />
                </p>
            </div>
        </section>
    )
}