/*
Process Scheduling

Multiprocessor systems use multiple CPUs to perform various tasks. This increases throughput and reduces response time. 
In this problem, a multiprocessor system has a certain number of processors. 
Each processor has the ability to schedule a limited number of processes in one second. 
After this scheduling, the processor's ability is reduced to floor(ability/2). 

Given the processor's abilities and the number of processes, what is the minimum time required to schedule all the processes in the system ?

Example

n = 5 (number of processors and size of ability[])
ability = [3, 1, 7, 2, 4]
processes = 15

This optimal solution is:
	First, the processor with ability = 7schedules 7 processes in one second. Now, ability = [3, 1, 3, 2, 4] because 7 was reduced to floor(7/2). There are 15 - 7 = 8 remaining processes.
	
	Second, the processor with ability = 4is used. After that, ability = [3, 1, 3, 2, 2]. Remaining processes = 8 - 4 = 4.
	
	Third, a processor with ability = 3is used. Now, ability = [1, 1, 3, 2, 2]. Remaining processes = 4 - 3 = 1.
	
	Finally, a processor with ability = 1is used to schedule the final process.

Each step requires one second of processing time so the answer is 4.

Complete the function minimumTime with the parameter(s):
int ability[n]: each element denotes the ability of the ithprocessor
long processes:the number of processes to be scheduled

Returns:
int: the minimum time required to schedule the processes

Constraints
	1 ≤n≤ 105
	1 ≤ability[i] ≤ 106
	1 ≤processes≤ 1012	
	It is guaranteed that the processes can be scheduled using the given multiprocessor system.

Sample 1:

n = 5
ability = [2, 1, 5, 3, 1]
processes = 17

Output: 9

After choosing the processors with ability = 2, 5, and 3 respectively, a total of 10 processes are scheduled (requiring 3 seconds, one for each processor). 
So, there are 7 remaining processes, and the updated ability array now becomes [1, 1, 2, 1, 1]. 
Then choose the processor with ability = 2 to schedule 2 processes (requiring 1 second). 
After that, ability = [1, 1, 1, 1, 1] and 5 processes remain. 
All 5 processors are used to schedule one process each (requiring 5 seconds). 
The total time required is (3+1+5) = 9.

Sample 2:

n = 4
ability = [3, 1, 4, 2]
processes = 3

Output: 1

Choose the processor with ability = 3.
All 3 processes are scheduled and the total time required is 1 second.
*/

function findMaxSmaller(arr, elem) {
    let found = -1, index = 0;
    arr.forEach((item,i) =>{
        if (itemfound) {
            found = item;
            index =i;
        }
    })
    return [found, index]
}

function minimumTime(ability, processes) {
    let num = 0;
    while(processes > 1) {
        let [processor, pos] = findMaxSmaller(ability, processes);
        ability[pos]= Math.floor(processor/2);
        processes -= processor;
        num++;
    } 
    return num
}
