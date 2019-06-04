const questions = [
    {
        question: `Given the following,
    class X { void do1() { } }
    class Y extends X { void do2() { } }

    class Chrome {
        public static void main(String [] args) {
    		X x1 = new X();
    		X x2 = new Y();
    		Y y1 = new Y();
    		// insert code here
    } }
    Which, inserted at line 9, will compile?
        `,
        answers: ["x2.do2();", "(Y)x2.do2();", "((Y)x2).do2();", "None of the above statements will compile."],
        correctAnswerIndex: 2
    },
    {
        question: `Given:
    public class Tenor extends Singer {

        public static String sing() { return "fa"; }

        public static void main(String[] args) {
            Tenor t = new Tenor();
            Singer s = new Tenor();
            System.out.println(t.sing() + " " + s.sing());
        }
    }

    class Singer { public static String sing() { return "la"; } }

    What is the result?
    `,
        answers: ["fa fa", "fa la", "la la", "Compilation fails", "An exception is thrown at runtime"],
        correctAnswerIndex: 1
    },
    {
        question: `Given:
    class Building {
        Building() { System.out.print("b "); }

        Building(String name) {
            this();
            System.out.print("bn " + name);
        }
    }

    public class House extends Building {
        House() { System.out.print("h "); }

        House(String name) {
            this();
            System.out.print("hn " + name);
        }

        public static void main(String[] args) { new House("x "); }
    }

    What is the result?
    `,
        answers: ["h hn x", "hn x h", "b h hn x", "bn x h hn x", "b bn x h hn x", "bn x b h hn x", "Compilation fails"],
        correctAnswerIndex: 2
    },
    {
        question: `Given:
    class Mammal {
        String name = "furry ";
        String makeNoise() { return "generic noise"; }
    }

    class Zebra extends Mammal {
        String name = "stripes ";
        String makeNoise() { return "bray"; }
    }

    public class ZooKeeper {
        public static void main(String[] args) { new ZooKeeper().go(); }

        void go() {
            Mammal m = new Zebra();
            System.out.println(m.name + m.makeNoise());
        }
    }
    `,
        answers: [
            "furry bray",
            "stripes bray",
            "furry generic noise",
            "stripes generic noise",
            "Compilation fails",
            "An exception is thrown at runtime"
        ],
        correctAnswerIndex: 0
    },
    {
        question: `Given:

    import java.util.*;

    class Business { }
    class Hotel extends Business { }
    class Inn extends Hotel { }

    public class Travel {
    	ArrayList<Hotel> go() {
    		// insert code here
    	}
    }
    Which, inserted independently at line 9, will compile?
    `,
        answers: [
            "return new ArrayList<Inn>();",
            "return new ArrayList<Hotel>();",
            "return new ArrayList<Object>();",
            "return new ArrayList<Business>();"
        ],
        correctAnswerIndex: 1
    },
    {
        question: `
        public void foo( boolean a, boolean b)
        {
            if( a )
            {
                System.out.println("A"); /* Line 5 */
            }
            else if(a && b) /* Line 7 */
            {
                System.out.println( "A && B");
            }
            else /* Line 11 */
            {
                if ( !b )
                {
                    System.out.println( "notB") ;
                }
                else
                {
                    System.out.println( "ELSE" ) ;
                }
            }
        }
    `,
        answers: [
            `If a is true and b is true then the output is "A && B"`,
            `If a is true and b is false then the output is "notB"`,
            `If a is false and b is true then the output is "ELSE" `,
            `If a is false and b is false then the output is "ELSE"`
        ],
        correctAnswerIndex: 2
    },
    {
        question: `
    public class MyOuter
    {
        public static class MyInner
        {
            public static void foo() { }
        }
    }

    Which statement, if placed in a class other than MyOuter
    or MyInner, instantiates an instance of the nested class?
    `,
        answers: [
            `MyOuter m = new MyOuter();
MyOuter.MyInner mi = m.new MyOuter.MyInner();`,
            `MyOuter.MyInner m = new MyOuter.MyInner();`,
            `MyOuter.MyInner mi = new MyInner();`,
            `MyInner mi = new MyOuter.MyInner();`
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Primitive datatypes are allocated on stack.",
        answers: [
            "True",
            "False"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Can we create an instance of Enum outside of Enum itself?",
        answers: ["Yes", "No"],
        correctAnswerIndex: 1
    },
    {
        question: "What type of variable can be defined in an interface?",
        answers: ["public static", "private final", "public final", "static final"],
        correctAnswerIndex: 0
    },
    {
        question: `Which constructs an anonymous inner class instance?`,
        answers: [
            `Runnable r = new Runnable() { };`,
            `Runnable r = new Runnable(public void run() { });`,
            `Runnable r = new Runnable { public void run(){}};`,
            `System.out.println(new Runnable() {public void run() { }});`
        ],
        correctAnswerIndex: 3
    },
    {
        question: `What will be the output of the program?

        class A
        {
            final public int GetResult(int a, int b) { return 0; }
        }

        class B extends A
        {
            public int GetResult(int a, int b) {return 1; }
        }

        public class Test
        {
            public static void main(String args[])
            {
                B b = new B();
                System.out.println("x = " + b.GetResult(0, 1));
            }
        }
        `,
        answers: [
            `x = 0`, `x = 1`,
            `Compilation fails.`,
            `An exception is thrown at runtime.`
        ],
        correctAnswerIndex: 2
    },
    {
        question: `Can we create an instance of Enum outside of Enum itself?`,
        answers: [
            `Yes`,
            `No`
        ],
        correctAnswerIndex: 1
    },
    {
        question: `What is the output of below code snippet?

        class A
        {

        }

        enum Enums extends A
        {
            ABC, BCD, CDE, DEF;
        }
        `,
        answers: [
            `Runtime Error`,
            `Compilation Error`,
            `It runs successfully`,
            `EnumNotDefined Exception`
        ],
        correctAnswerIndex: 1
    },
    {
        question: `What is the output of below code snippet?

         enum Levels
        {
            private TOP,

            public MEDIUM,

            protected BOTTOM;
        }
        `,
        answers: [
            `Runtime Error`,
            `EnumNotDefined Exception`,
            `It runs successfully`,
            `Compilation Error`],
        correctAnswerIndex: 3
    },
    {
        question: `What is the output of below code snippet?

        enum Enums
        {
            A, B, C;

            private Enums()
            {
                System.out.println(10);
            }
        }

        public class MainClass
        {
            public static void main(String[] args)
            {
                Enum en = Enums.B;
            }
        }
        `,
        answers: [
            `10   10   10`,
            `Compilation Error`,
            `10   10`,
            `Runtime Exception`
        ],
        correctAnswerIndex: 0
    },
    {
        question: `Which of these can be returned by the operator &?`,
        answers: [
            `Integer`,
            `Boolean`,
            `Character`,
            `Integer or Boolean`
        ],
        correctAnswerIndex: 3
    },
    {
        question: `Which of the following operators can operate on a boolean variable?
            1. &&
            2. ==
            3. ?:
            4. +=`,
        answers: [
            `3 & 2`,
            `1 & 4`,
            `1, 2 & 4`,
            `1, 2 & 3`
        ],
        correctAnswerIndex: 3
    },
    {
        question: `Which of these operators can skip evaluating right hand operand?`,
        answers: [
            `!`,
            `|`,
            `&`,
            `&&`
        ],
        correctAnswerIndex: 3
    },
    {
        question: `What is the output of the following?

            class ChangeIt {
                static void doIt(int[] z) {
                    z = null;
                }
            }

            class TestId {
                public static void main(String[] args) {
                    int[] myArray = {1,2,3,4,5};
            
                    ChangeIt.doIt(myArray);
            
                    for(int i = 0; i < myArray.length; i++) {
                        System.out.print(myArray[i] + "");
                    }
                }`,
        answers: [
            `1,2,3,4,5`,
            `Nothing will be printed.`,
            `The program will halt with a run time error`,
            `0 0 0 0 0`
        ],
        correctAnswerIndex: 0
    },
    {
        question: `In case of method overloading, there must be IS-A relationship?`,
        answers: [
            `True`,
            `False`
        ],
        correctAnswerIndex: 1
    },
    {
        question: `Which three guarantee that a thread will leave the running state?

            1. yield()
            2. wait()
            3. notify()
            4. notifyAll()
            5. sleep(1000)
            6. aLiveThread.join()
            7. Thread.killThread()`,
        answers: [
            `1,2 and 4`,
            `2,5 and 6`,
            `3,4 and 7`,
            `4,5 and 7`
        ],
        correctAnswerIndex: 1
    },
    {
        question: `Which class or interface defines the wait(), notify() and notifyAll() methods?`,
        answers: [
            `Object`,
            `Thread`,
            `Runnable`,
            `Class`
        ],
        correctAnswerIndex: 0
    },
    {
        question: `Which two of the following methods are defined in class Thread?

            1. start()
            2. wait()
            3. notify()
            4. run()
            5. terminate()`,
        answers: [
            `1 and 4`,
            `2 and 3`,
            `2 and 4`,
            `3 and 4`
        ],
        correctAnswerIndex: 0
    }, {
        question: `What is the output of the following program?

            import java.util.HashMap;
            import java.util.Map;
            
            public class MapTest {
                public static void main(String[] args) {
                    Map m = new HashMap();
                    m.put(null, "Test");
                    m.put(null, "Fest");
                    System.out.println(m);
                }
            }`,
        answers: [
            `{null = Fest}`,
            `{null = Test}`,
            `Compilation error at 7 and 8`,
            `Compilation error at 8, about can't override the value of "Test"`
        ],
        correctAnswerIndex: 0
    }, {
        question: `Is HashMap synchronized?`,
        answers: [
            `True`,
            `False`
        ],
        correctAnswerIndex: 1
    }, {
        question: `If you were to store objects into an implementation of List which happens only once in the entire life cycle of the product, but reading these objects inside
the List implementation is quite high, then which one would you use?`,
        answers: [
            `Vector`,
            `LinkedList`,
            `ArrayList`
        ],
        correctAnswerIndex: 2
    }, {
        question: `What is the data structure that a Set uses to store its elements?`,
        answers: [
            `array`,
            `Object`,
            `Map`,
            `ArrayList`
        ],
        correctAnswerIndex: 2
    }, {
        question: `Enumeration is an interface that helps to iterate over collection, but it can't remove any element the collection it is iterating?`,
        answers: [
            `True`,
            `False`
        ],
        correctAnswerIndex: 1
    }, {
        question: `x = x + 1 is comparable to which one of the given choices in Java?`,
        answers: [
            `++x`,
            `x++`,
            `x = x - 1`,
            `Non of the above.`
        ],
        correctAnswerIndex: 1
    }


    // { question: `Question 0`, answers: [`Ipsim`, `lotus`, `Idk`, `Wrong`], correctAnswerIndex: 0 },
    // { question: `Question 1`, answers: [`Ipsim`, `lotus`, `Idk`, `Wrong`], correctAnswerIndex: 1 },
    // { question: `Question 2`, answers: [`Ipsim`, `lotus`, `Idk`, `Wrong`], correctAnswerIndex: 2 },
    // { question: `Question 3`, answers: [`Ipsim`, `lotus`, `Idk`, `Wrong`], correctAnswerIndex: 3 },
    // { question: `Question 4`, answers: [`Ipsim`, `lotus`, `Idk`, `Wrong`], correctAnswerIndex: 0 },
    // { question: `Question 5`, answers: [`Ipsim`, `lotus`, `Idk`, `Wrong`], correctAnswerIndex: 1 },
    // { question: `Question 6`, answers: [`Ipsim`, `lotus`, `Idk`, `Wrong`], correctAnswerIndex: 2 },
    // { question: `Question 7`, answers: [`Ipsim`, `lotus`, `Idk`, `Wrong`], correctAnswerIndex: 3 },
    // { question: `Question 8`, answers: [`Ipsim`, `lotus`, `Idk`, `Wrong`], correctAnswerIndex: 0 },
    // { question: `Question 9`, answers: [`Ipsim`, `lotus`, `Idk`, `Wrong`], correctAnswerIndex: 1 },
    // { question: `Question 10`, answers: [`Ipsim`, `lotus`, `Idk`, `Wrong`], correctAnswerIndex: 2 },
];

export default questions;
