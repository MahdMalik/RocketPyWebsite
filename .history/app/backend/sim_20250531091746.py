from rocketpy import Environment, SolidMotor, Rocket, Flight
import datetime
import openpyxl
 
# Iterate the loop to read the cell values

env = Environment(latitude=33.4328614, longitude=-96.8084617)


tomorrow = datetime.date.today() + datetime.timedelta(days=1)
env.set_date(
    (tomorrow.year, tomorrow.month, tomorrow.day, 12)
)  # Hour given in UTC time
env.set_atmospheric_model(type="Forecast", file = "GFS")
# env.info()
print("Creating motor....\n")
H97J6 = SolidMotor(
    # MUST CHANGE USER FOR YOURSELF (and probably path too)
    thrust_source= "./ReferencedFiles/AeroTech_M1850W.eng",
    dry_mass=0.141,
    dry_inertia=(0, 0, 0),
    nozzle_radius= 0.001,
    grain_number= 4,
    grain_density= 1000,
    grain_outer_radius= 0.01,
    grain_initial_inner_radius= 0.005,
    grain_initial_height= 0.05,
    grain_separation= 0,
    grains_center_of_mass_position= 0.1,
    center_of_dry_mass_position= 0.15,
    nozzle_position=0,
    burn_time= 3.9,
    throat_radius= 0.005,
    coordinate_system_orientation= "nozzle_to_combustion_chamber",
)
print("Motor Done!\n")

l1Rocket = Rocket(
    radius= 0.0381,
    mass= 1.464,
    inertia=(3.321, 4.321, 0.024),
    power_off_drag="./ReferencedFiles/L1MotorOn.csv",
    power_on_drag="./ReferencedFiles/L1MotorOff.csv",
    center_of_mass_without_motor=0,
    coordinate_system_orientation="tail_to_nose",
)

rail_buttons = l1Rocket.set_rail_buttons(
    upper_button_position=-0.108,
    lower_button_position=-0.515,
    angular_position=45,
)

l1Rocket.add_motor(H97J6, position=-0.565)

nose_cone = l1Rocket.add_nose(
    length=0.229, kind="vonKarman", position=0.565
)

fin_set = l1Rocket.add_trapezoidal_fins(
    n=3,
    root_chord=0.0952,
    tip_chord=0.051,
    span=0.064,
    position=-0.445,
    cant_angle=0
)

Main = l1Rocket.add_parachute(
    "Main",
    cd_s=0.8,
    trigger="apogee",
    sampling_rate=105,
    lag=1.5,
    noise=(0, 8.3, 0.5),
)

testFlight = Flight(
    rocket=l1Rocket, environment=env, rail_length=2.2, inclination=84, heading=0
)
col = 1
testFlight = Flight(rocket=l1Rocket, environment=env, rail_length=2.2, inclination=84, heading=0)
testFlight.plots.trajectory_3d()