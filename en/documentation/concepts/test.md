---
layout: null
---

## Index ##

* <a href="#automated-unitary-test" class="wollokLink">Automated unitary test</a>
    * <a href="#unit" class="wollokLink">Unit</a>
    * <a href="#automatic" class="wollokLink">Automatic</a>
    * <a href="#independent" class="wollokLink">Independent</a>
* <a href="#test-definition" class="wollokLink">Test definition</a>
    * <a href="#assert" class="wollokLink">Assert</a>
    * <a href="#describe" class="wollokLink">Describe</a>
    * <a href="#tests" class="wollokLink">Tests</a>
* <a href="#test-execution" class="wollokLink">Test execution</a>
* <a href="#advanced-testing" class="wollokLink">Advanced testing</a>
    * <a href="#describe-initialization" class="wollokLink">Describe initialization</a>
    * <a href="#initialize" class="wollokLink">Initialize</a>
    * <a href="#helper-methods" class="wollokLink">Helper methods</a>
* <a href="#error-testing" class="wollokLink">Error testing</a>  

___

## Automated unitary test ##
It's a tool that Wollok offers to test the code in a more practical, reliable, and professional way.


In the paradigm of programming object-oriented, what do we want to prove of an object? Mainly, its behavior: we want to send messages to the object and verify that the expected, happens.

### Unit ###
The kind of test we approach qualifies as “unitary”, because it's based on identifying significant units of the code and proving punctual cases where these step in.

### Automatic ###
The fundamental feature of the test, is that you can automate the execution and consequently, its validation.

The tests remain saved as well as the actual solution code and, when it's needed, it can be executed all at once, getting a report of the result of each one.

### Independent ###
Each test is conceived independently.

The execution logic of the test assumes that each one runs from the initial situation of the system, i.e, the environment resets between tests, guaranteeing it full independent.

## Test definition ##
The tests are defined in the same project where the solution is, but in separate files with an representative name and .wtest extension (with a different name from the one of your .wlk file).

At the beginning of our test file, we have to import the .wlk file, the one we are going to try the following way:
```wollok
import pepita.*
```

### Assert ###
It is a self-defined object of the lib library, that understand the next messages:


**equals** : first is the value expected to be returned by the second message.
```wollok
test "pepita's initial energy" {
	assert.equals(100, pepita.energy())
}
```

**that**: the answer is expected to be true.
```wollok
test "pepita begins being strong" {
	assert.that(pepita.isStrong())
}
```
**notThat**: the answer is expected to be false.
```wollok
test "pepita flies many miles, and is no longer strong" {
	pepita.fly(60)
	assert.notThat(pepita.isStrong())
}
```
### Describe ###
We identify a sum of tests with the designated word **describe** and an expressive name with which we identify it. Then, { } are used to delimit the beginning and the end, gathering all the tests that form it.
```wollok
describe "Pepita's test" {
    test "pepita's initial energy" {
	    assert.equals(100, pepita.energy())
    }
    test "pepita begins being strong" {
	    assert.that(pepita.isStrong())
    }
    test "pepita flies and lowers her energy" {
	    pepita.fly(5)
	    assert.equals(85, pepita.energy())
    }
}
```
### Tests ###
Within the previous describe we can identify two kinds of test, the ones with messages you try to prove which have a return value `pepita´s initial energy` and `pepita begins being strong` or searching to prove that methods with effects like eat or fly, works properly. First, those messages are sent and then the one inserted on the assert, is a very simple one that is limited to exhibit the caused effect.

## Test execution ##
In the IDE, once you have selected the tests file, you click the execute button (The one in the menu, Execute,> Execute <Ctrl F11>).
In case many test files are defined, besides executing one by one the manner explained, you can execute them all (selecting the project, menu, Execute > Execute as > Execute all Wollok project tests).


## Advanced testing ##

### Describe initialization ###
Inside the describe, you can declare variables and constants. Just like when objects or classes are defined, they also can be initialized either with punctual values, urging existing classes or with the return value of any message. The reach of these variables and constants are all the describe tests.

```wollok
describe "Pepita's test" {
	// objects used in all tests
	const campana = new City(consumption = 60)
	const sanMartin = new City(consumption = 5)

	test "pepita starts with 100 energy units." {
		assert.equals(100, pepita.energy())
	}
}
```
### Initialize ###
When it’s needed to make before each test other settings actions about the more complex initial situation, for the ones the use of variables isn't enough, an initialize method (which doesn´t expect parameters) can be defined.

```wollok
describe "Pepita's test" {
    // objects used in all tests
    const campana = new City(consumption = 60)
    const sanMartin = new City(consumption = 5)

    // All the tests start with pepita having
    // these two cities as favorites
    method initialize() {
        pepita.addCity(campana)
        pepita.addCity(sanMartin)
    }
}

```
### Helper methods ###
For some repeated actions between test, but not common to all of them, auxiliar methods can be defined (as well as methods of any object).

```wollok
describe "Pepita's test" {
    // objects used in all tests
    const campana = new City(consumption = 60)
    const sanMartin = new City(consumption = 5)

    //There are tests that show different things according
    // to the same situation, one option is to define a method.
    method crazyTrip() {
        // Since quilmes is only used here, it is convenient not
        // to define the reference in the describe but to remain 
        // within the test. In addition, within the same test we 
        // can see how it is defined or what represents quilmes, 
        // which helps to better understand what we are testing.
        const quilmes = new City(consumption = 1)
        pepita.meetWish()
        pepita.addCity(quilmes)
        pepita.meetWish()
        pepita.meetWish()
	}
}
```
## Error testing ##
To prove an error, the test may be written inside a block of code, sent to the assert object with the legend throwsExceptionLike. We wait that in the code, a derogation occurs

Messages thar assert recognizes:


**throwsException( block )**: is the simplest, in the test we expect an error (no matter what).
```wollok
test "when I want to get an alphabetical value pulls error" {
	assert.throwsException({ wallet.take("A") })
}
```

**throwsExceptionWithMessage( errorMessage, block )**:we expect an error with a specific message (if the message does not match the test fails).
```wollok
test "when I want to get more money than I have throw error" {
	assert.throwsExceptionWithMessage(
		"You must withdraw less than 500", 
		{ wallet.take(1000) }
	)
}
```

**throwsExceptionLike( exceptionExpected , block )**: is the most restrictive option as they have to match, the exception type and the error message.
``` wollok
test "when I want to get a negative amount throw error" {
	assert.throwsExceptionLike(
   		new UserException( message = "The amount to be withdrawn must be positive" ), 
   		{ wallet.take(-20) }
	)
}
```